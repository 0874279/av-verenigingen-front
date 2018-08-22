<template>
  <nav class="nav has-shadow">
    <div class="container">
      <router-link to="/av-verenigingen/front-end/district/all">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAh1BMVEX///8AAADz8/P29vb8/Pz5+fnk5OTx8fGvr6+7u7vc3NzIyMjMzMzBwcHZ2dmysrLS0tLj4+Pq6uqampqpqamioqKYmJhXV1cXFxeNjY1lZWUICAgmJiZ3d3e3t7eFhYVMTEx9fX0qKio6OjppaWlBQUE2NjYSEhIcHBxmZmYwMDAoKChbW1sGlpSoAAAD9klEQVRIia2W2YKiOhCGIftOEpYGUdy1x/H9n+9UxFZg+vSci1M3oslnLfmrQpb9T8aVAVOR/KfdhCoptRRgUptB8r9hVHWlBcQppZzz8Ghrj34i9P7alz6EEBHijLEAYFEKFf8NYN26b3PBEaKjARejFEYO7vvw1LnP+z4vYkTvDQRbGZyWln6TtrwloP3Ybre1NyFR0duhXHWMKTNY/EfeAojj565AhGLsSzGoobuv82SnwJWXclkFCav9sWNf37ntPvOn9SvPg5Jmno+5wVLbTJyTJn/biqHo7Cw2dk5/1sxSrCZIvuEgiEG//dB9n36eJ1hMkb5GURn7Ph+7Plz7++K8zOeUOUjOnX2VgNeD8Y1YFMRdpki+s0Z7656LXnhGrVwg8T4lWhHrshjKMXhSWcep8gtN0M0U2WOMo9ifx1iidRFlzNMfkLPCmOIoP++PNSlVxBnSfEYQ2Wx3l3YkrkVGCIairW4+LWod0u5KTQk8FITQIPbHhNwjRRQjxETfwaKSjqWYGj8lhHjG6epNezDghCTErhNihGMYUrdmUq1BvzNDdkugCYCAyDYr9ETSSue+jl8VMwliGykgiWHdDY7GSffoKf/7fD81npJM1XpecC1SR9CE1L81SNIqBFGg1aM0h+NJVgsiszVFDyco2CMceRiRqn1JcJMtLGpOEoB4MGeZvLhIs/gxUfqCIFnhswfClN4B4oaUvr5OGmrR5pjWdkS4qlc+5eYYQuVEHUc3IyBz6x+ZIOTqBnpdlIrheJ5qsJpGBedOneejF71PujLbxpryOkXqWVRQLTYiXJWlgmrSbW2cnXl5tzTIhGQYm4+acYy4a4qHrLpCISz6CXJRaXMKiqQP7D7y/tBZzho7PPIcBsNQmBQ570GGCIOSwTAl6uN5Xp19DiZcaCiAPkyQGqSe1gAhWL3+7eTk2O5ES684ql4T5bqSnVZQmSQSbHdfv7dbbZ99yAXccYhX4wQ+3DXnUUAQPlLK67f3ndT2qT5iCsMSA5P8vNGp/0C3qh50VW8mZdnp4jXKkbbJD7Kb0kG+D5kj+AxWvHy0n5d62ka+gNuRQ6nZQxj0KQ+E0dd5tev1SprpfWGEdnB7bRVa2OqLyNtumI1gYoRXKtZhiQyjkto+v5SzEZSYAWLzZol46LxUgfZXM9f3WDbtXMcn2+E5Bhjm6/Z2b4RaEimfSvpKxoelAYQi55ztf51ODRzId0RG/P58WXeQkwocbvzkwzdFUF4Xnn9HABPLW9+vO+sCvFhEuLYKeNZSSvbDiwzb76Ccp64UVlRDU2hTWBv+8ubDZbe75v36vO2Ergpjws/7x/iYtbJqvAsxxD/eKbLsH3eHQPWe6ijoAAAAAElFTkSuQmCC"
          alt="AV Verenigingen"/>
      </router-link>
      <router-link class="nav-item is-tab"
        :to="{ name: 'allclubs', params: { district: 'all' } }">Home</router-link>
      <router-link class="nav-item is-tab"
        :to="{ name: 'create' }">Team toevoegen</router-link>
    </div>
  </nav>
</template>
