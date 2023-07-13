import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import img1 from '../../ASSETS/img 2.svg'
import img2 from '../../ASSETS/img 6.svg'
import img3 from '../../ASSETS/img 4.svg'
import img4 from '../../ASSETS/f5.svg'
import img5 from '../../ASSETS/f6.svg'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Veg.css'
import Footer from '../../COMPONENTS/Footer/Footer'
import ProductSlider from '../../COMPONENTS/Products/ProductSlider'



function ProductPage() {
  const {prodid} = useParams()

  //Hook for pc1
  const [imageset, setimageset] = React.useState(null)
  const [productdata, setproductdata] = React.useState([])
  const [activeimg ,setactiveimg] = React.useState({})
  const [count, setcount] = React.useState(1)


  //Hook for pc2
  const [showreview, setshowreview] = React.useState(false)

  const getproductdatabyid = async () => {
    let temp = {
      "Code": 200,
      "Message": "Success",
      "Data": [
        {
          "ProductId": 1,
          "ProductName": "Product 1",
          "ProductDescription": "Product 1 Description....food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion. Plants, which convert solar energy to food by photosynthesis, are the primary food source. Animals that feed on plants often serve as sources of food for other animals. To learn more about the sequence of transfers of matter and energy in the form of food from organism to organism, see food chain.",
          "ProductImage": [
            
            { id: 1,
              image: img3
            }
          ],
          "ProductPrice": 100,
          "SalesPrice": 80,
          "ProductDiscount": 20,
          "ProductReview": [
            {
              "ReviewId": 1,
              "Name": "ABHIJIT TK",
              "Email": "abhijit@gmail.com",
              "Rating": 5,
              "Date": "2023-07-11",
              "Review":"The Food we had enjoyed at the time of dinner. It was really delicious taste with great quality, everything had unique taste which we had ordered, nice arrangement and services from the staff while eating, we found nothing bad about this hotel."
            },
           
            {
              "ReviewId": 2,
              "Name": "Dharsan PG",
              "Email": "abhijit@gmail.com",
              "Rating": 4,
              "Date": "2023-04-21",
              "Review":"The Food we had enjoyed at the time of dinner. It was really delicious taste with great quality, everything had unique taste which we had ordered, nice arrangement and services from the staff while eating, we found nothing bad about this hotel."
            }
          ]
        }
      ]
    }

    if(temp.Code === 200) {
      setimageset(temp.Data[0].ProductImage)
      setproductdata(temp.Data[0])
      setactiveimg(temp.Data[0].ProductImage[0])
    }
  }

  useEffect(() => {
    getproductdatabyid()
    window.scroll(0,0)
  },[])

  const [rating, setrating] = React.useState(0)

  const products = [
    {
      id: 1,
      productimage: img1,
      productname: 'strawberry',
      productprice: 100,
      counttype: '1 per kg',
      discountpercent: 10
    },
    {
      id: 2,
      productimage: img2,
      productname: 'orange',
      productprice: 200,
      counttype: '1 per kg',
      discountpercent: 12
    },
    {
      id: 3,
      productimage: img3,
      productname: 'papaya',
      productprice: 150,
      counttype: '1 per kg',
      discountpercent: 8
    },
    {
      id: 4,
      productimage: img4,
      productname: 'Guava',
      productprice: 70,
      counttype: '1 per kg',
      discountpercent: 5
    },
    {
      id: 5,
      productimage: img5,
      productname: 'grapes',
      productprice: 300,
      counttype: '1 per kg',
      discountpercent: 20
    },
    {
      id: 6,
      productimage: img1,
      productname: 'strawberry',
      productprice: 170,
      counttype: '1 per kg',
      discountpercent: 15
    },
    {
      id: 7,
      productimage: img2,
      productname: 'orange',
      productprice: 180,
      counttype: '1 per kg',
      discountpercent: 12
    },
    {
      id: 8,
      productimage: img3,
      productname: 'papaya',
      productprice: 150,
      counttype: '1 per kg',
      discountpercent: 19
    },
    // {
    //   id: 9,
    //   productimage: img4,
    //   productname: 'Guava',
    //   productprice: 140,
    //   counttype: '1 per kg',
    //   discountpercent: 13
    // },
    // {
    //   id: 10,
    //   productimage: img5,
    //   productname: 'Grapes',
    //   productprice: 120,
    //   counttype: '1 per kg',
    //   discountpercent: 30
    // }
  ]

  const [reloadnavbar, setreloadnavbar] = React.useState(false)
  const addtocart = () => {
    let cart= JSON.parse(localStorage.getItem('cart'))
    if(cart) {
      let itemincart = cart.find(item => item.productdata.ProductId === productdata.ProductId)
      if(itemincart){
        cart = cart.map(item => {
          if(item.productdata.ProductId === productdata.ProductId){
            return {
              ...item,
              quantity: item.quantity + count
            }
          }
          else{
            return item
          }
        })
        localStorage.setItem('cart',JSON.stringify(cart))
      }
      else{
         cart = [
          ...cart,
          {
            productdata,
            quantity: count
          }
        ]
        localStorage.setItem('cart',JSON.stringify(cart))
      }
    }
    else {
      cart=[{
        productdata,
        quantity: count
      }]
      localStorage.setItem('cart',JSON.stringify(cart))
    }
    setreloadnavbar(!reloadnavbar)
  }

  return (
    <div className='productpage'>
      {/* <p>
        {JSON.stringify(productdata)}
      </p> */}
      <Navbar reloadnavbar={reloadnavbar}/>
      <div className='pc1'>
        <Link to='/' >
          <button className='goback'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg> Go Back
          </button>
        </Link>

        <div className='c11'>
          <div className='imgset'>
            {
              imageset && imageset?.map((item,i)=>
              {
                return  (
                  <div className='imgsmall'
                  onClick={()=>{
                    setactiveimg(item)
                  }}>
                    <img src={item.image} alt='image' className={
                      activeimg.id === item.id ? 'active' : ''
                    }/>
                  </div>
                )
              })
            }
          </div>
          <div className='imgbig'>
            <img src={activeimg.image} alt='active' />
          </div>
        </div>

        <div className='c12'>
          <h1 className='head1'>{productdata.ProductName}</h1>
          <div className='c121'>
            <p className='price'>
              ${productdata.SalesPrice * count }<span>${productdata.ProductPrice * count}</span>
            </p>

            <div className='incrdecr'>
              <button
                onClick={() => {
                  if(count>1) {
                    setcount(count-1)
                  }
                }}
              >-</button>
              <p>{count}</p>
              <button
                onClick={() =>{
                  if(count< 20) {
                    setcount(count+1)
                  }
                }}>+</button>
            </div>
          </div>
          <div className='btncont'>
            <button 
            onClick={() => {
              addtocart()
            }}>
              Add to Cart
            </button>
            <button
            onClick={() => {
              alert("Added to Buy Now")
            }}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className='pc2'>
        {
          showreview ?
          <div className='tab'>
            <button className='inactive'
            
            onClick={() => {
              setshowreview(false)
            }}
            >Description</button>
            <button className='active'
            
            onClick={() => {
              setshowreview(true)
            }}
            >Review</button>
          </div>
          :
          <div className='tab'>
            <button className='active'
            
            onClick={() => {
              setshowreview(false)
            }}
            >Description</button>
            <button className='inactive'
            
            onClick={() => {
              setshowreview(true)
            }}
            >Review</button>
          </div>
        }
        {
          showreview ?
            <div className='reviewcont'>
              <form>
                <div className='formgroup'>
                  <label htmlFor=''>Name</label>
                  <input type='text' />
                </div>
                <div className='formgroup'>
                  <label htmlFor=''>Email</label>
                  <input type='email' />
                </div>
                <div className='formgroup'>
                  <label htmlFor=''>Review</label>
                  <textarea name='' id='' cols='30' rows='10'></textarea>
                </div>
                <div className='formgroup'>
                  <label htmlFor=''>Rating</label>
                  <div className='rating'>
                    <div className='star'
                    onClick={() => {
                      setrating(1)
                    }}
                    >
                      {
                        rating >=1 ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      }
                    </div>
                    <div className='star'
                    onClick={() => {
                      setrating(2)
                    }}
                    >
                      {
                        rating >=2 ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      }
                    </div>
                    <div className='star'
                    onClick={() => {
                      setrating(3)
                    }}
                    >
                      {
                        rating >=3 ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      }
                    </div>
                    <div className='star'
                    onClick={() => {
                      setrating(4)
                    }}
                    >
                      {
                        rating >=4 ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      }
                    </div>
                    <div className='star'
                    onClick={() => {
                      setrating(5)
                    }}
                    >
                      {
                        rating >=5 ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      }
                    </div>
                  </div>
                </div>

                <button>Submit</button>
              </form>

              <div className='allreview'>
                <h1 className='prodhead1'>Product Reviews</h1>
                {productdata.ProductReview && productdata.ProductReview.map((item,index)=>                   {
                  return (
                    <div className='review'>
                      <div className='reviewhead'>
                        <p className='name'>{item.Name}</p>
                        <div className='rating1'>
                          <div className='star'>
                      {
                        item.Rating >=1 ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      }
                          </div>
                          <div className='star'>
                      {
                        item.Rating >=2 ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      }
                          </div>
                          <div className='star'>
                      {
                        item.Rating >=3 ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      }
                          </div>
                          <div className='star'>
                      {
                        item.Rating >=4 ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      }
                          </div>
                          <div className='star'>
                      {
                        item.Rating >=5 ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 staractive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 starinactive">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                      }
                          </div>
                        </div>
                        <span className='date'>{item.Date}</span> 
                      </div>
                      <div className='reviewbody'>
                        {item.Review}
                      </div>
                    </div>    
                  )
                  })
                }
              </div>
            </div> 
            :
            <p className='desc'>
              {productdata.ProductDescription}
            </p>
        }
      </div>
      <div className='slidercont'>
        <ProductSlider products={products} categoryname='Related Products'/>
      </div>
      <div className='slidercont'>
        <ProductSlider products={products} categoryname='More Products'/>
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage