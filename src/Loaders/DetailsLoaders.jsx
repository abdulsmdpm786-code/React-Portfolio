





import axios from "axios"

export default async function DetailsLoaders() {

    try {

        const res = await axios.get('https://dummyjson.com/users')
        if(res.status === 200) {
            return res.data
        }
        
    } catch (error) {
        console.log(error);
        
    }
}



// import axios from "axios";

// export default async function ProductLoader({ request }) {
//   const url = new URL(request.url);
//   console.log("this is the url", url);

//   const query = url.searchParams.get("query");
//   console.log("this data", query);

//   try {
//     const res = await axios.get("https://fakestoreapi.com/products");

//     let products = res.data;

//     if (res.status === 200) {
//       if (query) {
//         products = products.filter((pro) => {
//             const lowerTitle = pro.title.toLowerCase()
//             const lowerQuery = query.toLowerCase()

//             return lowerTitle.includes(lowerQuery)
//         })
//       }

//       return products;
//     }
//   } catch (error) {
//     console.log("", error);
//   }
// }
