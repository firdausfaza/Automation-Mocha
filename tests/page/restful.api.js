import BaseAPI from '$root/page/base.api';

const restfulBooker = {
    pingCheck : () => BaseAPI.get('/ping'),
}

export default restfulBooker;