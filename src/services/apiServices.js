import react from "react";
import axios from 'axios';
export default class ApiServices extends react.Component  {

    getData(){
        return axios.get('https://api.covid19india.org/state_district_wise.json')
            .then(res=>{
                let states=[];
                for (const k in res.data) {
                    states.push(k);
                }
                return {"states":states,"res":res.data};
            })
            .then(data=>{
                return {
                    "states": data.states,
                    "data": data.res
                };
            })
            .catch(err=>{
                throw err;
            });
    }

}