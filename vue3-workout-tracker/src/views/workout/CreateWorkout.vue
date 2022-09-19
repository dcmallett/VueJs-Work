<template>
    <div class="max-w-screen-md mx-auto px-4 py-10">
        <!-- status message -->
        <div v-if="statusMessage || errorMessage" class="mb-10 p-4 bg-light-grey rounded-md shadow-lg">
            <p class="text-at-light-green">
                {{ statusMessage }}
            </p>
            <p class="text-red-500">{{ errorMessage }}</p>
        </div>

        <!-- create form -->
        <div class="p-8 flex items-start bg-light-grey rounded-md shadow-lg">
            <form class="flex flex-col gap-y-5 w-full">
                <h1 class="text-2xl text-at-light-green">Record workout</h1>
            
                <!-- workout name -->
                <div class="flex flex-col">
                    <label for="workout-name" class="mb-1 text-sm text-at-light-green">
                        Workout Name:
                    </label>
                    <input 
                        class="p-2 text-gray-500 focus:outline-none" 
                        type="text" required
                        id="workout-name"
                        v-model="workoutName"
                    />
                </div>

                <!-- workout type -->
                <div class="flex flex-col">
                    <label for="workout-type" class="mb-1 text-sm text-at-light-green">
                        Workout Type
                    </label>
                        <select
                            class="p-2 text-gray-500 focus:outline-none"
                            id="workout-type"
                            required
                            v-model="workoutType"
                        >
                        <option value="select-workout">Select Workout</option>
                        <option value="strength">Strength Training</option>
                        <option value="cardio">Cardio</option>
                    </select>
                </div>
                
                <!-- Strength Training Inputs -->
                <div v-if="workoutType === 'strength'" class="flex flex-col gap-y-4">
                    <div 
                    class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
                    v-for="(workout, index) in exercises"
                    :key="index"
                    >
                        <div class="flex flex-col md:w-1/3">
                            <label for="exercise-name" class="mb-1 text-sm text-at-light-green">
                                Exercise
                            </label>
                            <input
                                class="p-2 w-full text-gray-500 focus:outline-none"
                                required 
                                type="text"
                                v-model="workout.exercise"
                            />
                        </div>
                        <div class="flex flex-col flex-1">
                            <label for="sets" class="mb-1 text-sm text-at-light-green">
                                Sets
                            </label>
                            <input 
                                required
                                type="text"
                                class="p-2 w-full text-gray-500 focus:outline-none"
                                v-model="workout.sets"
                            />
                        </div>
                        <div class="flex flex-col flex-1">
                            <label for="reps" class="mb-1 text-sm text-at-light-green">
                                Reps
                            </label>
                            <input 
                                required
                                type="text"
                                class="p-2 w-full text-gray-500 focus:outline-none"
                                v-model="workout.reps"
                            />
                        </div>
                        <div class="flex flex-col flex-1">
                            <label for="weight" class="mb-1 text-sm text-at-light-green">
                                Weight (KG)
                            </label>
                            <input 
                                required
                                type="text"
                                class="p-2 w-full text-gray-500 focus:outline-none"
                                v-model="workout.weight"
                            />
                        </div>
                        <img 
                            src="../../assets/images/trash-light-green.png" 
                            class="h-4 w-auto absolute -left-5 cursor-pointer"
                            alt="Delete Workout"
                        />
      
                    </div>
                        <button
                            class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white 
                            bg-at-light-green duration-200 border-solid border-2 
                            border-transparent hover:border-at-light-green hover:bg-white 
                            hover:text-at-light-green"
                            type="button">
                            Add Exercise
                        </button>
                </div>

                <!-- Cardio  Inputs -->
                <div v-if="workoutType === 'cardio'" class="flex flex-col gap-y-4">
                <div 
                    class="flex flex-col gap-x-6 gap-y-2 relative md:flex-row"
                    v-for="(workout, index) in exercises"
                    :key="index"
                >
                <div class="flex flex-col md:w-1/3">
                <label for="cardio-type" class="mb-1 text-sm text-at-light-green">
                    Exercise
                </label>
                <select
                    class="p-2 w-full text-gray-500 focus:outline-none"
                    required 
                    v-model="workout.cardioType"
                >
                <option value="#">Select Type</option>
                <option value="">Run</option>
                <option value="">Walk</option>
            </select>
                
                </div>
                <div class="flex flex-col flex-1">
                    <label for="distance" class="mb-1 text-sm text-at-light-green">
                        Distance
                    </label>
                <input 
                    required
                    type="text"
                    class="p-2 w-full text-gray-500 focus:outline-none"
                    v-model="workout.distance"
                />
                </div>
                <div class="flex flex-col flex-1">
                    <label for="duration" class="mb-1 text-sm text-at-light-green">
                        Duration
                    </label>
                <input 
                    required
                    type="text"
                    class="p-2 w-full text-gray-500 focus:outline-none"
                    v-model="workout.duration"
                />
                </div>
                <div class="flex flex-col flex-1">
                    <label for="pace" class="mb-1 text-sm text-at-light-green">
                        Pace
                    </label>
                <input 
                    required
                    type="text"
                    class="p-2 w-full text-gray-500 focus:outline-none"
                    v-model="workout.pace"
                />
                </div>
                <img 
                    src="../../assets/images/trash-light-green.png" 
                    class="h-4 w-auto absolute -left-5 cursor-pointer"
                    alt="Delete Workout"
                />

                </div>
                <button
                    class="mt-6 py-2 px-6 rounded-sm self-start text-sm text-white 
                    bg-at-light-green duration-200 border-solid border-2 
                    border-transparent hover:border-at-light-green hover:bg-white 
                    hover:text-at-light-green"
                    type="button">
                    Add Exercise
                </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const workoutName = ref('');
const workoutType = ref('select-workout');
const exercises = ref([1])
const statusMessage = ref(null);
const errorMessage = ref(null)


</script>