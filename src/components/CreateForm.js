import React, { useState, useEffect } from "react";

export default function CreateForm() {
    return (

        <section class="max-w-4xl p-6 pt-14 mx-auto bg-white rounded-md ">
            <h2 class="text-lg font-semibold text-gray-700 capitalize ">Create Contract</h2>

            <form>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label class="text-gray-700 " for="username">Recipient Name</label>
                        <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label class="text-gray-700   " for="emailAddress">Recipient Address</label>
                        <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40    focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label class="text-gray-700   " for="password">Contract Name</label>
                        <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md      focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40    focus:outline-none focus:ring" />
                    </div>

                </div>

                <div class="mb-6 pt-4">
                    <label for="large-input" class="block mb-2  font-medium text-gray-900 ">Contract Details</label>
                    <textarea type="text" id="large-input" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 "/>
                </div>

                <label class="block pt-4 mb-2    font-medium text-gray-900 " for="file_input">Upload file</label>
                <input class="block w-full    text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer" id="file_input" type="file" />

                <div class="flex justify-end mt-6">
                    <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send</button>
                </div>
            </form>
        </section>
    )
}