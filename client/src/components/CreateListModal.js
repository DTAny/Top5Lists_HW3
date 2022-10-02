import { useContext } from 'react'
import { GlobalStoreContext } from '../store'

function CreateListModal() {
    const { store } = useContext(GlobalStoreContext);
    function handleCreateList(event) {
        let payload = {
            'name': document.getElementById('create-list-name-textfield').value === '' ? 'Untitled' : document.getElementById('create-list-name-textfield').value,
            'items': [
                document.getElementById('create-list-1-textfield').value === '' ? 'Untitled 1' : document.getElementById('create-list-1-textfield').value,
                document.getElementById('create-list-2-textfield').value === '' ? 'Untitled 2' : document.getElementById('create-list-2-textfield').value,
                document.getElementById('create-list-3-textfield').value === '' ? 'Untitled 3' : document.getElementById('create-list-3-textfield').value,
                document.getElementById('create-list-4-textfield').value === '' ? 'Untitled 4' : document.getElementById('create-list-4-textfield').value,
                document.getElementById('create-list-5-textfield').value === '' ? 'Untitled 5' : document.getElementById('create-list-5-textfield').value,
            ]
        }
        store.createList(payload);
    }
    function handleCloseModal(event) {
        store.hideCreateListModal();
    }
    return (
        <div
            className="modal"
            id="create-modal"
            data-animation="slideInOutLeft">
            <div className="modal-dialog">
                <header className="modal-header dialog-header">
                    Create a new List
                </header>
                <div className="modal-center">
                    <div id='create-list-name'>List Name:</div>
                    <input id='create-list-name-textfield' placeholder='Untitled' defaultValue=''/>
                    <hr id='create-list-divider'/>
                    <div id='create-list-1'>Top 1 Name:</div>
                    <input id='create-list-1-textfield' placeholder='Untitled 1' defaultValue=''/>
                    <div id='create-list-2'>Top 2 Name:</div>
                    <input id='create-list-2-textfield' placeholder='Untitled 2' defaultValue=''/>
                    <div id='create-list-3'>Top 3 Name:</div>
                    <input id='create-list-3-textfield' placeholder='Untitled 3' defaultValue=''/>
                    <div id='create-list-4'>Top 4 Name:</div>
                    <input id='create-list-4-textfield' placeholder='Untitled 4' defaultValue=''/>
                    <div id='create-list-5'>Top 5 Name:</div>
                    <input id='create-list-5-textfield' placeholder='Untitled 5' defaultValue=''/>
                </div>
                <div className="modal-footer confirm-cancel-container">
                    <button
                        className="modal-button"
                        onClick={handleCreateList}
                    >Confirm</button>
                    <button
                        className="modal-button"
                        onClick={handleCloseModal}
                    >Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default CreateListModal;