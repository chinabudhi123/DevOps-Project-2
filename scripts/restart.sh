#!/bin/bash
cd /home/ec2-user/ticket-booking
npm install
pm2 kill
pm2 start backend/server.js

