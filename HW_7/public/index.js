var app = new function() {
    const tableEl = document.getElementById('countries');
    let currentCountries = [];

    fetch('/countries').then(res=>res.json()).then(res=>{
        currentCountries = res;
        this.FetchAll();
    })

    sentCountries = () =>{
        fetch('/countries', {
            method:'post',
            headers:{
              "content-type":"application/json"
          },
            body: JSON.stringify(currentCountries)
        });
    }
    editCountries = () =>{
      fetch('/countries', {
          method:'PATCH',
          headers:{
            "content-type":"application/json"
        },
          body: JSON.stringify(currentCountries)
      });
  }
    
    this.FetchAll = function() {
      let data = '';
      if (currentCountries.length > 0) {
        for (i = 0; i < currentCountries.length; i++) {
          data += '<tr>';
          data += '<td>' + currentCountries[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
          data += '</tr>';
        }
      }
      return tableEl.innerHTML = data;
    };
  
    this.Add = function () {
      let el = document.getElementById('add-name');  
      if (el.value) {
        currentCountries.push(el.value.trim());
        el.value = '';
        sentCountries()
        this.FetchAll();
      }
    };
  
    this.Edit = function (item) {
      let el = document.getElementById('edit-name');
      el.value = currentCountries[item];
      document.getElementById('spoiler').style.display = 'block';
      self = this;
      document.getElementById('saveEdit').onsubmit = function() {
        if (el.value) {
          currentCountries.splice(item, 1,  el.value.trim());
          editCountries();
          self.FetchAll();
          CloseInput();
        }
      }
    };

    this.Delete = function (item) {
      currentCountries.splice(item, 1);
      sentCountries();
      this.FetchAll();
    };
  }
  app.FetchAll();
  
  function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
  }