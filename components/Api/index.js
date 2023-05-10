// import { API } from '../config';

export const getRequiredImgs = (folderId) => {
    try {
        return fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id%2Cname%2CthumbnailLink%2CwebContentLink)&key=AIzaSyADz5CnI_r0p6RlGHxrvuYk3V8FJF-GrSY&pageSize=600`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            }})
            .then((response) => {
              return response.json();
            })
            .catch((err) => {
              console.log(err);
            });        
    } catch (error) {
        console.log('error',error)
    }
  };