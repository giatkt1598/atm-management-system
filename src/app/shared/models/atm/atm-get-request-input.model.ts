import { PagedGetRequestInputModel } from '../base/paged-get-request-input.model';

export interface AtmGetRequestInputModel extends PagedGetRequestInputModel {
  name?: string;
  manufacturer?: string;
  type?: string;
  serial?: string;
  image?: string;
}
