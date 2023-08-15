const child = require('./child')

const myName = '李'

const names = []

const addYourName = (name) => {
    names.push(name)
}

child(teacherName)
// <child :teacher-name="myName" @sayMyName="addYourName">
// 