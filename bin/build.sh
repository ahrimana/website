#!/bin/bash

set -e

SYSTEM_PACKAGES="\
    python-pip \
    python-dev"

mv /app/sources.list /etc/apt
apt-get update
apt-get install -y $SYSTEM_PACKAGES

cd /app
pip install -r requirements.txt
rm -f Dockerfile Vagrantfile build.sh

apt-get autoremove -y --purge
apt-get clean
