import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import art1 from '../../assets/images/art-1.jpg';
import art10 from '../../assets/images/art-10.jpeg';
import art11 from '../../assets/images/art-11.jpeg';
import art12 from '../../assets/images/art-12.jpeg';
import art13 from '../../assets/images/art-13.jpeg';
import art14 from '../../assets/images/art-14.jpeg';
import art15 from '../../assets/images/art-15.jpeg';
import art16 from '../../assets/images/art-16.jpeg';
import art17 from '../../assets/images/art-17.jpeg';
import art2 from '../../assets/images/art-2.jpg';
import art3 from '../../assets/images/art-3.jpg';
import art4 from '../../assets/images/art-4.jpg';
import art5 from '../../assets/images/art-5.jpg';
import art6 from '../../assets/images/art-6.jpg';
import art7 from '../../assets/images/art-7.JPG';
import art8 from '../../assets/images/art-8.jpg';
import art9 from '../../assets/images/art-9.jpg';


const initialState = {
    artworks: [],
    categories: ['All', 'Oil', 'Digital', 'Sketch', 'Abstract'],
    selectedCategory: 'All',
    isLoading: false,
    error: null,
};



export const fetchArtworks = createAsyncThunk('home/fetchArtworks', async () => {
    return [
        { id: 1, title: 'Me..!', artist: 'Pawan sai', description: 'Me, Drawn by me..!', category: 'Sketch', image: art17 },

        { id: 2, title: 'lil Bro', artist: 'Pawan', description: 'This sketch freezes a fleeting moment of childhood innocence.', category: 'Sketch', image: art16 },

        { id: 3, title: 'Sandy master', artist: 'Pawan', description: '', category: 'Sketch', image: art15 },

        { id: 4, title: 'Rowan Atkinson', artist: 'Pawan', description: 'A comedic icon caught in the act.', category: 'Sketch', image: art14 },

        { id: 5, title: 'Robert Downey Jr', artist: 'Pawan', description: 'Genius, Billionaire, Playboy, Philanthropist.', category: 'Abstract', image: art13 },

        { id: 6, title: 'Patrick Bateman', artist: 'Pawan', description: 'A graphite study of the American Psycho himself.', category: 'Sketch', image: art12 },

        { id: 7, title: 'Midnight City', artist: 'Pawan', description: 'City lights blurring into the darkness of the night.', category: 'Digital', image: art11 },

        { id: 8, title: 'Fluid Motion', artist: 'Pawan', description: 'Capturing the dynamic movement of water in stasis.', category: 'Abstract', image: art10 },

        { id: 9, title: 'Forest Path', artist: 'Pawan', description: 'A welcoming path leading deep into a mysterious forest.', category: 'Sketch', image: art9 },

        { id: 10, title: 'Portrait of Luna', artist: 'Pawan', description: 'A delicate portrait capturing a soft, moonlit expression.', category: 'Sketch', image: art8 },

        { id: 11, title: 'Geometric Harmony', artist: 'Pawan', description: 'Sharp lines and perfect circles creating a balanced composition.', category: 'Abstract', image: art7 },

        { id: 12, title: 'Winter Solstice', artist: 'Pawan', description: 'A barren tree standing strong against a snowy backdrop.', category: 'Sketch', image: art6 },

        { id: 13, title: 'Golden Hour', artist: 'Pawan', description: 'Warm light hitting the fields, translated into monochrome values.', category: 'Oil', image: art5 },

        { id: 14, title: 'Industrial Core', artist: 'Pawan', description: 'The beauty of raw machinery and gears.', category: 'Sketch', image: art4 },

        { id: 15, title: 'Rainy Day Cafe', artist: 'Pawan', description: 'Cozy vibes of a coffee shop on a wet afternoon.', category: 'Digital', image: art3 },

        { id: 16, title: 'The Dancer', artist: 'Pawan', description: 'Frozen in mid-air, a dancer executes a perfect leap.', category: 'Sketch', image: art2 },
        
        { id: 17, title: 'Cosmic Dust', artist: 'Pawan', description: 'A visualization of the stars and nebulae.', category: 'Abstract', image: art1 },
    ];
});

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArtworks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchArtworks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.artworks = action.payload;
            })
            .addCase(fetchArtworks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { setCategory } = homeSlice.actions;
export default homeSlice.reducer;
