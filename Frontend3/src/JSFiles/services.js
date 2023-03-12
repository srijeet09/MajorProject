import axios from "axios";
const Base_url = "http://localhost:8080/product";
const Base_url1 = "http://localhost:8080/product1";
const Base_url2 = "http://localhost:8080/product3";
export async function sendData(form) {
  return axios.post(Base_url, form);
}
export async function getData() {
  return axios.get(Base_url);
}
export async function getData11(form) {
  return axios.post("http://localhost:8080/product0", form);
}
export async function getData12(form) {
  return axios.post(`http://localhost:8080/product/${form}`);
}
export async function sendId(orderid) {
  return axios.delete(`http://localhost:8080/product?id=${orderid}`);
}
export async function getId(orderid) {
  return axios.get(`http://localhost:8080/product/${orderid}`);
}
export async function gettId(orderid) {
  return axios.post(`http://localhost:8080/product10`, orderid);
}
export async function senddId() {
  return axios.delete(`http://localhost:8080/product1`);
}
export async function modify(form) {
  return axios.put(Base_url, form);
}
export async function sendData2(form) {
  return axios.post(Base_url2, form);
}
export async function getttId(orderid) {
  return axios.get(`http://localhost:8080/product3/${orderid}`);
}

export async function sendData3(form) {
  return axios.post(Base_url1, form);
}

export async function getData1(form) {
  return axios.post("http://localhost:8080/product11", form);
}

export async function deleteId(orderid) {
  return axios.delete(`http://localhost:8080/product1/${orderid}`);
}

export async function delete1(orderid) {
  return axios.delete(`http://localhost:8080/product0/${orderid}`);
}
export async function delete2(orderid) {
  return axios.delete(`http://localhost:8080/product10/${orderid}`);
}
export async function delete3(orderid) {
  return axios.delete(`http://localhost:8080/product3/${orderid}`);
}

export async function deletedId(p) {
  return axios.post(`http://localhost:8080/product12`, p);
}
