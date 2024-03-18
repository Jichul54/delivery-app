from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
@require_http_methods(["POST"])
def test_view(request):
    try:
        data = json.loads(request.body)
        message = data.get('message', '')
        if message:
            return JsonResponse({'message': f'your message {message}'}, status=201)
        else:
            return JsonResponse({'message': 'test failed'}, status=401)
    except json.JSONDecodeError:
        return JsonResponse({'message': 'Invalid JSON'}, status=400)