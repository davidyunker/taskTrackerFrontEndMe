"use strict";

// added to .gitIgnore until we get this to work.

app.factory("ApiCallFactory", ($q, $http, $location, $routeParams) => {


let getToDos = () => {
    return $q ((resolve, reject) => {
      $http.get(`http://localhost:5000/api/values`)
      .then((itemObject) => {
        resolve(itemObject.data)
      })
      .catch((error) => {
        reject(error)
        console.log("error", error)
      })
    })
    };

  let getSingleToDo = (id) => {
    return $q ((resolve, reject) => {
      $http.get(`http://localhost:5000/api/values/${id}`)
      .success((itemObject) => {
        resolve(itemObject);
      })
      .error((error) => {
        reject(error);
        console.log("error", error)
      });
    });
    };

let postToDo  = (ToDoInfo) => {
  console.log("postToDo is running", ToDoInfo)
    return $q((resolve, reject) => {
       $http.post(`http://localhost:5000/api/values`,
        JSON.stringify(ToDoInfo))
        .success((ObjFromMyServer) => {
          console.log(ObjFromMyServer);
          // currentRouteID = ObjFromFirebase.name;
          // console.log("I'M THE FIREBASE ID I CAN HELP YOU", currentRouteID)
          resolve(ObjFromMyServer);
        })
        .error ((error) => {
          reject(error);
    })
    })

  }

  let putToDo = (ToDoInfo, id) => {
  console.log("putToDo is running", id)
    return $q((resolve, reject) => {
       $http.put(`http://localhost:5000/api/values/${id}`,
        JSON.stringify(ToDoInfo))
        .success((ObjFromMyServer) => {
          resolve(ObjFromMyServer);
        })
        .error ((error) => {
          reject(error);
    })
    })


}
    let deleteToDo = (id) => {
    console.log("deleteToDo is running", id)
    return $q((resolve, reject) => {
    $http.delete(`http://localhost:5000/api/values/${id}`)
    .success((ObjFromMyServer) => {
      console.log("this is the ObjFromMyServer", ObjFromMyServer)
    resolve(ObjFromMyServer);
    })
    })
  }

return {putToDo, deleteToDo, postToDo, getToDos, getSingleToDo}
})