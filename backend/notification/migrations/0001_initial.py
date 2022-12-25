# Generated by Django 4.1.3 on 2022-12-02 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action', models.CharField(blank=True, max_length=250, null=True)),
                ('hint', models.CharField(blank=True, max_length=250, null=True)),
                ('hint_img', models.CharField(blank=True, max_length=250, null=True)),
                ('is_viewed', models.BooleanField(blank=True, default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
