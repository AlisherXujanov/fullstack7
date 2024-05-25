from django.shortcuts import render, redirect
from .models import Announcement
from .forms import AnnouncementForm


# Create your views here.
def landing_page(request):
    all_announcements = Announcement.objects.all()
    context = {
        "all_announcements": all_announcements,
        "item_for_if": None,
    }
    return render(request, 'landing.html', context)


def create_announcement(request):
    if request.method == "POST":
        form = AnnouncementForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('landing_page')

    else:
        form = AnnouncementForm()
    return render(request, 'create_announcement.html', {'form': form})