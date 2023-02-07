function ListItem() {
    return ( 
        <div className="wrap-item">
            <div className="wrap-btn">
                <button>Load</button>
                <button>Add Item</button>
            </div>
            <div className="list-item">
                <h2>List item</h2>
                <ul>
                    <li>
                        <span>Name : Pine</span>
                        <span>Age : 19</span>
                        <span>Learn : Redux</span>
                    </li>
                    <li>
                        <span>Name : Thong</span>
                        <span>Age : 22</span>
                        <span>Learn : Redux-toolkit</span>
                    </li>
                    <li>
                        <span>Name : Bap</span>
                        <span>Age : 13</span>
                        <span>Learn : Redux-toolkit</span>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default ListItem;