<script>
       
 function checkempty(form) {
   if (form.name.value == null ||form.name.value == undefined ||form.name.value.length == 0) 
{
    alert("Name cannot be empty\n");
    return false;
            }
 else {
   alert("Your response has been recorded\n");
   return true;
       }
        }
</script>