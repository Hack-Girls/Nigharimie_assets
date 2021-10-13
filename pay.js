window.alert("We are up and running")
axios.post("http://localhost:8000/makepayment/").then((res)=>{window.alert(res.status)}).catch((error)=>{console.log(error)})
