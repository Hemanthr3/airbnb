/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["links.papareact.com"],
  },
  env:{
    mapbox_key:'pk.eyJ1IjoiaGVtYW50aHIzIiwiYSI6ImNsZGo0Z3lmMjA1MW0zb2t3NGNnNHRzMXYifQ.ec2nHwm-RXzMrfnYkRqR1g'
  }
}

module.exports = nextConfig
