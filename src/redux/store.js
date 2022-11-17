import {configureStore} from "@reduxjs/toolkit"
import { postAllMovies } from "./features/allMoviesSlicer"
import { postCasts, postDetails, postReviews, postVideos } from "./features/detailSlicer"
import { postGoogleLogin } from "./features/googleOAuthSlicer"
import { postMainCategory } from "./features/mainCategorySlicer"
import { postMain, postPopular, postTop, postUpcoming } from "./features/mainSlicer"
import { postLogin, postRegister } from "./features/navLogRegisSlicer"
import { postSearch } from "./features/searchSlicer"

export default configureStore ({
    reducer: {
        popular: postPopular,
        main: postMain,
        top: postTop,
        upcoming: postUpcoming,
        mainCategory: postMainCategory,
        allMovies: postAllMovies,
        search: postSearch,
        detail: postDetails,
        cast: postCasts,
        review: postReviews,
        video: postVideos,
        login: postLogin,
        register: postRegister,
        googleLogin: postGoogleLogin
    }
})