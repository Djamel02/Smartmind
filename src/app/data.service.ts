import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result:any;
  constructor(private _http:Http) { }

  //methode to get all users
  getUsers(){
    return this._http.get('/api/users').map(result => this.result = result.json().data);
  }

  //methode to get level
  getLevel(){
    return this._http.get('/api/levels').map(result => this.result = result.json().data);
  }

  //methode to insert player
  insertUser(newUser){
    var headers= new Headers();
    headers.append('Content-type','application/json');
    return this._http.post('/api/user',newUser)
      .map(res => res.json());
  }

  //Insert admin
  //methode to insert player
  insertAdmin(newUser){
    var headers= new Headers();
    headers.append('Content-type','application/json');
    return this._http.post('/api/admin',newUser)
      .map(res => res.json());
  }

  //methode to delete user
  deleteUser(id){
    return this._http.delete('/api/user/'+id).map(res => res.json());
  }

  // Update player
  UpdateUser(id,user){
    return this._http.put('/api/user/'+id,user).map(res => res.json);
  }

  // Update level of player
  UpdateLevel(id,level){
    return this._http.put('/api/level/'+id,level).map(res => res.json);
  }

  //query get user method
  QueryGet(id){
    return this._http.get('/api/user/'+id).map(result => this.result = result.json().data);
  }
  //query to get user by email and password
  getUserByEmailPassword(email,password){
    return this._http.get('/api/userer&email='+email+'&password='+password).map(result => this.result = result.json().data)
  }

  //query to login admin
  getAdminByEmailPassword(email,password){
    return this._http.get('/api/admins&email='+email+'&password='+password).map(result => this.result = result.json().data)
  }
}
