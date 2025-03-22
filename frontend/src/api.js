// src/api/index.js

import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Replace with your backend URL

// Fetch user details
export const getUser = async () => {
  const response = await axios.get(`${API_URL}/auth/user`, {
    withCredentials: true,
  });
  return response.data;
};

// User login
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

// User logout
export const logoutUser = async () => {
  const response = await axios.post(
    `${API_URL}/auth/logout`,
    {},
    { withCredentials: true }
  );
  return response.data;
};

// Course-related APIs
export const fetchCourses = async () => {
  const response = await axios.get(`${API_URL}/courses`);
  return response.data;
};

export const fetchCourseDetail = async (id) => {
  const response = await axios.get(`${API_URL}/courses/${id}`);
  return response.data;
};

export const fetchUserCourses = async (userId) => {
  const response = await axios.get(`${API_URL}/courses/user/${userId}`);
  return response.data;
};

// Quiz-related APIs
export const fetchQuiz = async (courseId) => {
  const response = await axios.get(`${API_URL}/quizzes/${courseId}`);
  return response.data;
};

export const submitQuiz = async (quizData) => {
  const response = await axios.post(`${API_URL}/quizzes/submit`, quizData);
  return response.data;
};

// User registration
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);
  return response.data;
};
