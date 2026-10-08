// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// function App() {

//   const getUsers = async () => {

//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/users'
//     )

//     console.log(response.data)
//   }

//   return (
//     <>
//       <h1>Axios Example</h1>

//       <button onClick={getUsers}>
//         Get Users
//       </button>
//     </>
//   )
// }

// function App() {

//   const [users, setUsers] = useState([])

//   const getUsers = async () => {

//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/users'
//     )

//     setUsers(response.data)
//   }

//   const createUser = async () => {

//     const response = await axios.post(
//       'https://jsonplaceholder.typicode.com/users',
//       {
//         name: 'Nandhu',
//         email: 'nandhu@example.com'
//       }
//     )

//     console.log(response.data)
//   }

//   const updateUser = async () => {

//     const response = await axios.put(
//       'https://jsonplaceholder.typicode.com/users/1',
//       {
//         name: 'Updated Name',
//         email: 'updated@example.com'
//       }
//     )

//     console.log(response.data)
//   }

//   // PATCH is useful when you only want to update specific fields.
//   const updateUserPatch = async () => {

//     const response = await axios.patch(
//       'https://jsonplaceholder.typicode.com/users/1',
//       {
//         name: 'Updated Name'
//       }
//     )

//     console.log(response.data)
//   }

//   const deleteUser = async () => {

//     const response = await axios.delete(
//       'https://jsonplaceholder.typicode.com/users/1'
//     )

//     console.log(response.status)
//   }

//   return (
//     <>
//       <h1>Users</h1>

//       <button onClick={getUsers}>
//         Get Users
//       </button>
//       <button onClick={createUser}>
//         Create User
//       </button>
//       <button onClick={updateUser}>
//         Update User
//       </button>
//       <button onClick={updateUserPatch}>
//         Update User (PATCH)
//       </button>
//       <button onClick={deleteUser}>
//         Delete User
//       </button>

//       {users.map((user) => (
//         <div key={user.id}>
//           <h3>{user.name}</h3>
//           <p>{user.email}</p>
//         </div>
//       ))}
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       <Header />

//       <main>
//         <h1>Products</h1>

        // <div className="products">

        //   <ProductCard
        //     name="Laptop"
        //     description="Powerful laptop for work and study"
        //     price="800"
        //     image="https://www.shutterstock.com/pixelsquid/assets_v2/251/2517066603070232068/jpeg-600/G03.jpg"
        //   />

        //   <ProductCard
        //     name="Mobile Phone"
        //     description="Latest smartphone with great camera"
        //     price="500"
        //     image="https://img-prd-pim.poorvika.com/product/Samsung-Galaxy-S26-FE-5G-Graphite-8GB-256GB-front-view.webp"
        //   />

        //   <ProductCard
        //     name="Headphones"
        //     description="Wireless headphones with clear sound"
        //     price="100"
        //     image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhRes4pU0od4hmQUEWj11OsJUxjVef-sFYqbFQwtn-2Nv7yYBJO85pvxP4MAsyYU4M9dNd9LDQCBKlpqi5A9IpSlfcmHWdf515p-MMt3MpJ_BWQswrm4KI1ce5qxeW3XRueHb1Dw&usqp=CAc"
        //   />

        //   <ProductCard
        //     name="Smart Watch"
        //     description="Smart watch with fitness tracking"
        //     price="150"
        //     image="https://rukminim2.flixcart.com/image/1126/1126/xif0q/smartwatch/l/b/t/-original-imagxp8tn3vjjdbz.jpeg?q=90"
        //   />

        //   <ProductCard
        //     name="Keyboard"
        //     description="Mechanical keyboard for developers"
        //     price="80"
        //     image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo46DMyqwxeZ8LLKZm2Ru9F-CqNtKjtjzWGIH5IFME3g&s=10"
        //   />

        //   <ProductCard
        //     name="Mouse"
        //     description="Wireless mouse with ergonomic design"
        //     price="50"
        //     image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YW1mQLTa6NzLdLVm2GkQolrQ2HjP6riQQQ0Ps73HfA&s=10"
        //   />

        // </div>
//       </main>


//       <Footer />
//     </>
//   );
// }