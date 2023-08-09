import express from 'express'
import BookRoutes from '../modules/book/book.router'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/books',
    route: BookRoutes,
  },
]
// const moduleRoutes = [
//   {
//     path: '/users',
//     route: UserRoutes,
//   },
//   {
//     path: '/academic-semesters',
//     route: AcademicSemesterRoutes,
//   },
//   {
//     path: '/academic-faculties',
//     route: AcademicFacultyRoutes,
//   },
//   {
//     path: '/academic-departments',
//     route: academicDepartmentRoutes,
//   },
//   {
//     path: '/students',
//     route: StudentRoutes,
//   },
//   {
//     path: '/faculties',
//     route: FacultyRoutes,
//   },
//   {
//     path: '/admins',
//     route: AdminRoutes,
//   },
//   {
//     path: '/users',
//     route: UserRoutes,
//   },
// ]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
