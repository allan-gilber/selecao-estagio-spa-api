import axios from 'axios';
import {rocketDataInfo} from '../model/RocketsInfoModels';

export class AxiosServices {
  private BASE_URL = 'https://api.spacexdata.com/v4/';

  public async getRocketsData(): Promise<rocketDataInfo[] | []>{
    return await axios.get(`${this.BASE_URL}rockets`).then((response: any) => {
      return response.data.map((rocket: any) => {
        return {name: rocket.name, id: rocket.id};
      });
    }).catch(error => {
      console.log('getRocketsData error:', error.message || error.response?.data?.message);
      return [];
    });
  }
}