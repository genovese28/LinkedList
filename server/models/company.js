const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({{
    "name": "Hooli",
    "password": "bloodboy",
    "email": "gavin@hooli.com",
    "handle": "@hooli",
    "logo": "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png",
    "employees": [
      {
        "firstName": "Michael",
        "lastName": "Hueter",
        "username": "mhueter",
        "password": "foo123",
        "currentCompany": "5a21b155ac27667d3de5bfaa",
        "photo": "https://www.mhueter.com",
        "experience": [
          {
            "jobTitle": "Instructor In Chief",
            "company": "5a21b155ac27667d3de5bfaa",
            "startDate": "2016-06-15T21:39:25.435000+00:00",
            "endDate": "2017-06-15T21:39:25.435000+00:00"
          }
        ],
        "education": [
          {
            "institution": "School of Hard Knocks",
            "degree": "Bachelors in Science",
            "endDate": "2014-06-15T21:39:25.435000+00:00"
          }
        ],
        "skills": [],
        "createdAt": "017-11-09T18:38:39.409Z",
        "updatedAt": "017-11-09T18:38:39.409Z"
      }
    ],
    "jobs": [
      {
        "title": "Software Developer",
        "company": "5a21b155ac27667d3de5bfaa",
        "salary": 150000,
        "equity": 2.1,
        "createdAt": "017-11-09T18:38:39.409Z",
        "updatedAt": "017-11-09T18:38:39.409Z"
      }
    ]
    }
}
