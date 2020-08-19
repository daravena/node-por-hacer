const { StoreManager } = require('./index');
let url = 'http://localhost:3064/onboarding/store/v1/';
const storeManager = new StoreManager(url, 'MX', 'Cmr', 'Web');
let documentToSave = {
    name: 'TestLL',
    last_name: 'Test last name',
    phone: '951042499'
}
const id = 'test-id';
const save = async () => {
    let res = await storeManager.save(id, documentToSave);
    console.log('Saved:  ->', res.data);
}
const get = async () => {
    let res = await storeManager.get(id);
    console.log('Get:  ->', res.data);
}
const update = async () => {
    documentToSave.name = 'Teast Name !!!';
    documentToSave.last_name = 'Teast LAst name';
    let res = await storeManager.update(id, documentToSave);
    console.log('Update:  ->', res.data);
}
save();
get();
update();
get();