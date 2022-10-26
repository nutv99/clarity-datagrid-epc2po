import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// See https://launchlibrary.net/docs/1.3/api.html#launch
interface Agency {
  id: number;
  name: string;
  abbrev: string;
  countryCode: string;
  type: number;
  infoUrls: string[];
  wikiUrl: string;
}

export interface Launch {
  id: number;
  name: string;
  windowstart?: string;
  windowend?: string;
  net: string;
  isostart: string;
  isoend: string;
  isonet: string;
  status?: number;
  tbdtime?: number;
  infoURLs?: string[];
  vidURLs?: string[];
  tbddate?: number;
  probability?: number;
  location: {
    pads: {
      id: number;
      name: string;
      infoURL: string;
      wikiURL: string;
      mapURL: string;
      latitude: number;
      longitude: number;
      agencies: Agency[];
    }[];
    id: number;
    name: string;
    infoURL: string;
    wikiURL: string;
    countryCode: string;
  };
  rocket?: {
    id: number;
    name: string;
    configuration: string;
    familyname: string;
    agencies: Agency[];
    wikiURL: string;
    infoURLs: string[];
    imageURL: string;
    imageSizes: number[];
  };
  missions?: {
    id: number;
    name: string;
    description: string;
    type: number;
    typeName: string;
    agencies: Agency[]
  }[];
  lsp?: {
    id: number;
    name: string;
    abbrev: string;
    countryCode: string;
    type: number;
    infoUrls: string[];
    wikiUrl: string;
  };
}

export interface LaunchResponse {
  launches: Launch[],
  offset: number;
  count: number;
  total: number;
}

export interface LaunchQuery {
  offset?: number;
}

@Injectable()
export class LaunchesService {

  private readonly baseUrl = 'https://launchlibrary.net/1.3/launch/next/10';

  constructor(private http: HttpClient) { }

  private buildUrl(options: LaunchQuery = {}) {
    let query = [];
    if (options.offset) {
      query.push('offset=' + options.offset);
    }
    if (query.length) {
      return this.baseUrl + '?' + query.join('&');
    } else {
      return this.baseUrl;
    }
  }

  query(options: LaunchQuery) {
    return this.http.get<LaunchResponse>(this.buildUrl(options));
  }
}