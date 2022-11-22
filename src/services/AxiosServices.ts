import axios from 'axios';
import DatabaseParser from '../business/DatabaseParser/DatabaseParser';
import {rocketDataInfo} from '../model/rocketsInfoModels';

export class AxiosServices {
  private BASE_URL = 'https://api.spacexdata.com/v4/';
  private totalPages = 1;
  private LIMIT = 25;
  private actualPage = 1;
  private loopControler = true;
  private arrayOfLaunchsData: any[] = [];

  public async getRocketsData(): Promise<rocketDataInfo[] | []>{
    return await axios.get(`${this.BASE_URL}rockets`).then((response: any) => {
      return response.data.map((rocket: any) => {
        return {rocket_id: rocket.id, rocket_name: rocket.name};
      });
    }).catch(error => {
      console.log('getRocketsData error:', error.message || error.response?.data?.message);
      return [];
    });
  }

  public async getLaunchsData(): Promise<any[] | []>{

    return await this.getBlockOfLaunchData().then(async (firstData: any) => {
      this.actualPage++;
      this.totalPages = firstData.totalPages;
      this.arrayOfLaunchsData.push(firstData);
      return Promise.all(await this.requestAlLRemainingLaunchData()).then(a => {console.log('terminou333');
        console.log('dsadas', this.arrayOfLaunchsData);
        return a;
      });
    });
  }

  private requestAlLRemainingLaunchData = async () => {
    do {
      console.log('rodou', this.actualPage, this.totalPages, this.actualPage < this.totalPages);
      const dataRequest: any = this.getBlockOfLaunchData();
      console.log('nextpage', dataRequest.hasNextPage);
      if (!dataRequest.hasNextPage) this.loopControler = false;
      this.arrayOfLaunchsData.push(dataRequest);
    } while (this.loopControler);
    return this.arrayOfLaunchsData;
  };

  private async getBlockOfLaunchData(){
    const body = {
      'options': {
        LIMIT: this.LIMIT,
        offset: this.LIMIT * this.actualPage
      }
    };
    return await axios.post(`${this.BASE_URL}launches/query`, body).then((response: any) => {
      if (!response.hasNextPage) {
        this.loopControler = false;
        this.totalPages = response.totalPages;
      }
      const convertedData = Promise.all(response.data.docs.map((launch: any) => {
        const parsers = new DatabaseParser();
        return parsers.launchDataPropertyNameHandler(launch).then((objArray: any) => parsers.stringifyArraysFields(objArray).then((objArray: any) => parsers.convertBooleanToString(objArray)));
      }));
      return convertedData;
    });
  }
}