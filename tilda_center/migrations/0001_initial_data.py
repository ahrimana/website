# -*- coding: utf-8 -*-
from south.utils import datetime_utils as datetime
from south.db import db
from south.v2 import DataMigration
from django.db import models

class Migration(DataMigration):

    def forwards(self, orm):
        from django.core.management import call_command
        call_command("loaddata", "/app/tilda_center/initial_data.json")

    def backwards(self, orm):
        "Write your backwards methods here."

    models = {

    }

    complete_apps = ['tilda_center']
    symmetrical = True