# Generated by Django 4.1 on 2022-09-06 22:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('celebrity', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='celebrity',
            name='followers',
            field=models.ManyToManyField(blank=True, related_name='celebrity_followers', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='celebrity',
            name='following',
            field=models.ManyToManyField(blank=True, related_name='celebrity_following', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='celebrity',
            name='friends',
            field=models.ManyToManyField(blank=True, related_name='celebrity_friends', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='celebrity',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='celebrity_user', to=settings.AUTH_USER_MODEL),
        ),
    ]
