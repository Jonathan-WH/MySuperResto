import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from '../service/api.service';

export const dataResolver: ResolveFn<{
  title: string;
  data: any[];
}> = async () => {
  //inject service
  const Service = inject(ApiService);
  // use service to get data
  const response = await Service.getData();

  //return data
  return {
    title: response.title,
    data: response.data,
  };
};
