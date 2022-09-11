# Generated by Django 4.1 on 2022-09-06 22:37

from django.db import migrations, models
import utilities.media_paths


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('key', models.CharField(blank=True, max_length=100, primary_key=True, serialize=False)),
                ('publish', models.CharField(default='Public', max_length=35)),
                ('caption', models.CharField(blank=True, max_length=250)),
                ('excerpt', models.TextField(blank=True, max_length=2000, null=True)),
                ('hashtags', models.CharField(blank=True, max_length=100, null=True)),
                ('thumbnail', models.ImageField(blank=True, default='posts/default-thumbnail.png', null=True, upload_to=utilities.media_paths.post_thumbnail_path)),
                ('picture', models.ImageField(blank=True, null=True, upload_to=utilities.media_paths.post_img_path)),
                ('video', models.FileField(blank=True, null=True, upload_to=utilities.media_paths.post_video_path)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('query_number', models.BigIntegerField(blank=True, default=0, null=True)),
                ('activity_rate', models.BigIntegerField(blank=True, default=1, null=True)),
            ],
        ),
    ]
