import axios from "axios";

export default axios.create({
 baseURL : 'https://api.yelp.com/v3/businesses',
 headers: {
     Authorization : 
     'Bearer BwHN9fBxusjzWNaRWBduwa4RtkXb2P8DL9KAM8QtUm1tQtvya9930_N3BLY_50rskF_opcXDOV39Gd2vOfJlpRdVmy3Za9ZTkOahIi_4Yxw3c_z7LbPcJJbHQZEfYXYx'
 }
});