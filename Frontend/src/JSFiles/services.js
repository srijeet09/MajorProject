import axios from "axios";
const Base_url = "http://localhost:8080/candidate";
const Base_url1 = "http://localhost:8080/voter1";
const Base_url2 = "http://localhost:8080/admin3";
export async function sendData(form) {
  return axios.post(Base_url, form);
}
export async function getData() {
  return axios.get(Base_url);
}
export async function getData11(form) {
  return axios.post("http://localhost:8080/candidates", form);
}
export async function getData12(form) {
  return axios.post(`http://localhost:8080/candidate/${form}`);
}
export async function sendId(orderid) {
  return axios.delete(`http://localhost:8080/candidate?id=${orderid}`);
}
export async function getId(orderid) {
  return axios.get(`http://localhost:8080/candidate/${orderid}`);
}
export async function gettId(orderid) {
  return axios.post(`http://localhost:8080/voter10`, orderid);
}
export async function senddId() {
  return axios.delete(`http://localhost:8080/voter1`);
}
export async function modify(form) {
  return axios.put(Base_url, form);
}
export async function sendData2(form) {
  return axios.post(Base_url2, form);
}
export async function getttId(orderid) {
  return axios.get(`http://localhost:8080/admin3/${orderid}`);
}

export async function sendData3(form) {
  return axios.post(Base_url1, form);
}

export async function getData1(form) {
  return axios.post("http://localhost:8080/voter11", form);
}

export async function deleteId(orderid) {
  return axios.delete(`http://localhost:8080/voter1/${orderid}`);
}

export async function delete1(orderid) {
  return axios.delete(`http://localhost:8080/candidates/${orderid}`);
}
export async function delete2(orderid) {
  return axios.delete(`http://localhost:8080/voter10/${orderid}`);
}
export async function delete3(orderid) {
  return axios.delete(`http://localhost:8080/admin3/${orderid}`);
}

export async function deletedId(p) {
  return axios.post(`http://localhost:8080/voter12`, p);
}

export async function sendDataa3(form) {
  return axios.post(`http://localhost:8080/admin30/${form}`);
}

export async function senfeb(form) {
  return axios.post("http://localhost:8080/Feedback", form);
}

export async function Voted(form) {
  return axios.post("http://localhost:8080/Voted", form);
}

export async function Voted1(admin) {
  return axios.post(`http://localhost:8080/Voted1/${admin}`);
}
