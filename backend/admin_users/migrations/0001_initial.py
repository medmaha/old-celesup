# Generated by Django 4.1.3 on 2022-12-02 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Admin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profile_type', models.CharField(default='Admin', editable=False, max_length=50)),
                ('is_premium', models.BooleanField(default=False)),
            ],
        ),
    ]
