const listElm = document.querySelector("#list");
const searchBar = document.getElementById("searchBar");

const apiUrl = "https://randomuser.me/api/?";



const fetchUsers = (params = "results=20") => {
    fetch(apiUrl + params)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        //data is array
        const user = data.results;
        let str = "";
        

        user.map(usr =>{
            console.log(usr);

            str += `
        <div class="col-md-6 col-lg-3 py-3">
                    <div class="card">
                        <img src="${usr.picture.large}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">
                          ${usr.name.title}
                          ${usr.name.first}
                          ${usr.name.last}
                          </h5>
                          <p class="card-text">
                          <ul class="list-unstyled">
                            <li><i class="fa-solid fa-mobile text-center pt-2"></i>${usr.phone}</li>
                            <li><i class="fa-solid fa-at text-center pt-2"></i> ${usr.email}</li>
                            <li><i class="fa-solid fa-calendar text-center pt-2"></i> ${usr.dob.date}</li>
                            <li><i class="fa-solid fa-location-dot text-center pt-2"></i> ${usr.location.city}</li>
                          </ul>
                          </p>
                          
                        </div>
                      </div>
                </div>
        
        `;
        });

        listElm.innerHTML = str;
    })
    .catch(err => (listElm.innerHTML = `<div class="alert alert-danger" role="alert">
    Oops! Something went wrong.
  </div>`));
};

fetchUsers();

const handleOnChange = e => {
    const params = "results=20&gender=" + e.value;
    fetchUsers(params);
};

 


