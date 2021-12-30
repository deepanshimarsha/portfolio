const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const sendData = () => {
    axios.post("http://127.0.0.1:8000/api/v1/contact/", {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,

    }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error)
      })
    }