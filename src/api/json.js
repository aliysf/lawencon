import {json} from '@/api/config';

export default {
    getBuses(id){
        return json.get("buses/"+id+".json")
    },
}
