--Step 1
Insert INTO public.account (
   account_firstname,
   account_lastname,
   account_email,
   account_password
    )
VALUES (
 "Tony",
 "Stark"
 "tony@starknet.com",
 "IamIronM@n"
);

--Step 2
Update.public.account 
SET account_type = "Admin"::account_type,
Where account_firstname = "Tony"
 AND account_lastname ="Stark";

DELETE FROM public.account 
WHERE account_firstname ="Tony"
AND account_lastname ="Stark";

--Step 3
UPDATE public.inventory

SET inv_description = REPLACE (
    inv_description,
    "small interiors",
    'a huge interior'
)
WHERE inv_make = "GM",
AND inv_model = "Hummer";

--Step 4
SELECT inv_make,
       inv_model,
       classification_name
FROM public.inventory
    INNER JOIN public.classification ON public.inventory.classification_id = public.classification.classification_id
WHERE classification_name = "Sport";

--Step 5
UPDATE public.inventory 
SET inv_image = REPLACE (inv_image, '/images', '/images/vehicles'),
  inv_thumbnail = REPLACE(inv_thumbnail , '/images', 'images/vehicles');