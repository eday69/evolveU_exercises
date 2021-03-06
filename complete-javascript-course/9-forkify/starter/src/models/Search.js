import axios from 'axios';
import  { key } from '../js/config';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    
    async getResults() {
        try {
            const res =await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            console.log('res', res);
            this.result = res.data.recipes;
            console.log('Srch', this.result);
        }  catch (error) {
            alert(error);
        }
    }
    
}
