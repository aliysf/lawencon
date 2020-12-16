import json from '@/api/json.js'
const repositories = {
    json : json,
};

export const RepositoryAPI = {
    get : name => repositories[name]
};
