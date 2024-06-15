

def add_to_wishlist(request, pk:int) -> bool:
    """
        Adds a product to the wishlist
        And returns boolean value
        - True: if we added
        - False: if we didn't add and it's already in the wishlist
    """
    wishlist = request.session.get('wishlist', [])
    if pk in wishlist:
        return False

    wishlist.append(pk)
    request.session['wishlist'] = wishlist
    return True


def remove_from_wishlist(request, pk: int) -> bool:
    """
        Removes a product from the wishlist
        And returns boolean value
        - True: if we removed
        - False: if we didn't remove and it's not in the wishlist
    """
    wishlist = request.session.get('wishlist', [])
    if pk in wishlist:
        wishlist.remove(pk)
        request.session['wishlist'] = wishlist
        return True
    return False
