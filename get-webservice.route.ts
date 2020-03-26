

import {Request, Response} from 'express';
import { WEBSERVICES } from './db-data';



export function getAllWebServices(req: Request, res: Response) {

    console.log("Retrieving web service data ...");

    setTimeout(() => {

      res.status(200).json({payload:Object.values(WEBSERVICES)});

    }, 1000);



}


export function getWebServiceByUrl(req: Request, res: Response) {

    const webserviceUrl = req.params["webserviceUrl"];

    const webservices:any = Object.values(WEBSERVICES);

    const webservice = webservices.find(webservice => webservice.url == webserviceUrl);

    setTimeout(() => {

      res.status(200).json(webservice);

    }, 1000);


}
