import Vue from "vue";
import Vuex from "vuex";
import { randomMeal, showDetails, showResult } from "../api";

Vue.use(Vuex);

const state = {
   meals :[],
   searchMeals :[],
   showMeal : []
  }
  const getters = {
    getMeals: state => state.meals,
    getSearchedMeals : state => state.searchMeals,
    getMealDetails : state=>state.showMeal
   
  }
  const mutations = {
      SET_MEAL(state,meal)
      {
          state.meals=meal
      },
      SET_SearchedMEAL(state,meals)
      {
          state.searchMeals=meals;
      },

      SET_MealDetails(state,meal)
      {
          state.showMeal=meal
      }

    
  }
  const actions = {
    async getRandomMeal( state ){
        const meal=(await randomMeal()).data['meals']
          
        state.commit('SET_MEAL',meal)
      },
      async getSearchedMeal( state,query ){
        const meals=(await showResult(query)).data['meals']
          
        state.commit('SET_SearchedMEAL',meals)
      },

      async getMealDetails( state,id ){
        const meals=(await showDetails(id)).data['meals']
          
        state.commit('SET_MealDetails',meals)
      },
      
  

  
  
   
    }

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
  
  });
  