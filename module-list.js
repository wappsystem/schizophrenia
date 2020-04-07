(function(){
    var modules={
        "panel-main":    	        {url:"$H/m/panel-main.html",router:1},
        "panel-child":              {url:"$H/m/panel-child.html"},
        
        "participant-data":   		        {url:"$H/m/participant/participant-data.html",Table:"participant-schizophrenia",form_module:"participant-form",router:1,
                                                child_panel:"panel-child",
                                                questionnaire_setup:"online-questionnaire-setup",
                                                online_questionnaire:"online-questionnaire-app",
                                                participant_id:{field1:"Subject_ID",field2:"Subject_Initials"},
                                                participant_export:"ID,Subject_ID,Screening_Number,Randomisation_Number,Subject_Initials,Gender,DOB"
                                            },
        "participant-form":   		        {url:"$H/m/participant/participant-form.html",Table:"participant-schizophrenia"},

        "online-questionnaire-setup":       {url:"$H/m/oq-setup.html",Table:"participant-schizophrenia"},
        "online-questionnaire-app":         {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"notes-schizophrenia",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"notes-schizophrenia"},

        "randomisation-table-data-schizophrenia":		{url:"$H/m/library/randomisation-table-data.html",Table:"randomisation-table-schizophrenia",form_module:"randomisation-table-form-schizophrenia"},
        "randomisation-table-form-schizophrenia":		{url:"$H/m/library/randomisation-table-form.html",Table:"randomisation-table-schizophrenia"},

        "adverse-event-data-schizophrenia":             {url:"$H/m/library/adverse-event-data.html",Table:"adverse-event-schizophrenia",form_module:"adverse-event-form-schizophrenia",task_name:"Adverse Event"},
        "adverse-event-form-schizophrenia":             {url:"$H/m/library/adverse-event-form.html",Table:"adverse-event-schizophrenia",task_name:"Adverse Event"},
        "file-notes-data-schizophrenia":                {url:"$H/m/library/file-notes-data.html",Table:"file-notes-schizophrenia",form_module:"file-notes-form-schizophrenia",task_name:"File Notes"},
        "file-notes-form-schizophrenia":                {url:"$H/m/library/file-notes-form.html",Table:"file-notes-schizophrenia",task_name:"File Notes"},
        "protocol-amendments-data-schizophrenia":       {url:"$H/m/library/upload-file-data.html",Table:"protocol-amendments-schizophrenia",form_module:"protocol-amendments-form-schizophrenia",task_name:"Protocol Amendments"},
        "protocol-amendments-form-schizophrenia":       {url:"$H/m/library/upload-file-form.html",Table:"protocol-amendments-schizophrenia",task_name:"Protocol Amendments"},
        
        "s-visit-date-data-schizophrenia":              {url:"$H/m/library/date-data.html",Table:"s-visit-date-schizophrenia",form_module:"s-visit-date-form-schizophrenia",task_name:"Visit Date"},
        "s-visit-date-form-schizophrenia":              {url:"$H/m/library/date-form.html",Table:"s-visit-date-schizophrenia",task_name:"Visit Date"},
        "s-anthropometry-data-schizophrenia":           {url:"$H/m/library/anthropometry-data.html",Table:"s-anthropometry-schizophrenia",form_module:"s-anthropometry-form-schizophrenia",task_name:"Anthropometry"},
        "s-anthropometry-form-schizophrenia":           {url:"$H/m/library/anthropometry-form.html",Table:"s-anthropometry-schizophrenia",task_name:"Anthropometry"},
        "s-ethnicity-data-schizophrenia":               {url:"$H/m/library/ethnicity-data.html",Table:"s-ethnicity-schizophrenia",form_module:"s-ethnicity-form-schizophrenia"},
        "s-ethnicity-form-schizophrenia":               {url:"$H/m/library/ethnicity-form.html",Table:"s-ethnicity-schizophrenia",task_name:"Ethnicity"},
        "s-lifestyle-data-schizophrenia":               {url:"$H/m/library/lifestyle-data.html",Table:"s-lifestyle-schizophrenia",form_module:"s-lifestyle-form-schizophrenia",task_name:"Lifestyle"},
        "s-lifestyle-form-schizophrenia":               {url:"$H/m/library/lifestyle-form.html",Table:"s-lifestyle-schizophrenia",task_name:"Lifestyle"},
        "s-education-data-schizophrenia":               {url:"$H/m/library/education-data.html",Table:"s-education-schizophrenia",form_module:"s-education-form-schizophrenia",task_name:"Education"},
        "s-education-form-schizophrenia":               {url:"$H/m/library/education-form.html",Table:"s-education-schizophrenia",task_name:"Education"},
        "s-concom-medication-data-schizophrenia":       {url:"$H/m/library/concom-medication-data.html",Table:"s-concom-medication-schizophrenia",form_module:"s-concom-medication-form-schizophrenia",task_name:"Unscheduled - Concomitant Medication"},
        "s-concom-medication-form-schizophrenia":       {url:"$H/m/library/concom-medication-form.html",Table:"s-concom-medication-schizophrenia",task_name:"Unscheduled - Concomitant Medication"},
        "s-concom-file-data-schizophrenia":		        {url:"$H/m/library/upload-file-data.html",Table:"s-concom-file-schizophrenia",form_module:"s-concom-file-form-schizophrenia",task_name:"Screening - Concomitant medication file upload"},
        "s-concom-file-form-schizophrenia":		        {url:"$H/m/library/upload-file-form.html",Table:"s-concom-file-schizophrenia",task_name:"Screening - Concomitant medication file upload"},
        "s-medical-history-data-schizophrenia":         {url:"$H/m/library/medical-history-data.html",Table:"s-medical-history-schizophrenia",form_module:"s-medical-history-form-schizophrenia"},
        "s-medical-history-form-schizophrenia":         {url:"$H/m/library/medical-history-form.html",Table:"s-medical-history-schizophrenia",task_name:"Medical History"},
        "s-ess-data-schizophrenia":                     {url:"$H/m/library/ess-data.html",Table:"s-ess-schizophrenia",form_module:"s-ess-form-schizophrenia"},
        "s-ess-form-schizophrenia":                     {url:"$H/m/library/ess-form.html",Table:"s-ess-schizophrenia",task_name:"Epworth Sleepiness Scale"},
        "s-isi-data-schizophrenia":                     {url:"$H/m/library/isi-data.html",Table:"s-isi-schizophrenia",form_module:"s-isi-form-schizophrenia"},
        "s-isi-form-schizophrenia":                     {url:"$H/m/library/isi-form.html",Table:"s-isi-schizophrenia",task_name:"Insomnia Severity Index"},
        "s-psqi-data-schizophrenia":                    {url:"$H/m/library/psqi-data.html",Table:"s-psqi-schizophrenia",form_module:"s-psqi-form-schizophrenia"},
        "s-psqi-form-schizophrenia":                    {url:"$H/m/library/psqi-form.html",Table:"s-psqi-schizophrenia",task_name:"Pittsburgh Sleep Quality Index (PSQI)"},
        "s-dass-data-schizophrenia":                    {url:"$H/m/library/dass-data.html",Table:"s-dass-schizophrenia",form_module:"s-dass-form-schizophrenia"},
        "s-dass-form-schizophrenia":                    {url:"$H/m/library/dass-form.html",Table:"s-dass-schizophrenia",task_name:"Depression Anxiety Stress Scale (DASS-21)"},

        "be-visit-date-data-schizophrenia":             {url:"$H/m/library/date-data.html",Table:"be-visit-date-schizophrenia",form_module:"be-visit-date-form-schizophrenia",task_name:"Visit Date"},
        "be-visit-date-form-schizophrenia":             {url:"$H/m/library/date-form.html",Table:"be-visit-date-schizophrenia",task_name:"Visit Date"},
        "be-pvt-data-schizophrenia":                    {url:"$H/m/library/pvt-data.html",Table:"be-pvt-schizophrenia",form_module:"be-pvt-form-schizophrenia",task_name:"PVT"},
        "be-pvt-form-schizophrenia":                    {url:"$H/m/library/pvt-form.html",Table:"be-pvt-schizophrenia",task_name:"PVT"},
        "be-pvt-pc-data-schizophrenia":                 {url:"$H/m/library/pvt-pc-data.html",Table:"be-pvt-pc-schizophrenia",form_module:"be-pvt-pc-form-schizophrenia",task_name:"PC PVT"},
        "be-pvt-pc-form-schizophrenia":                 {url:"$H/m/library/pvt-pc-form.html",Table:"be-pvt-pc-schizophrenia",task_name:"PC PVT"},
        "be-stroop-colour-practice-data-schizophrenia": {url:"$H/m/neurocog/stroop-colour-data.html",Table:"be-stroop-colour-practice-schizophrenia",form_module:"be-stroop-colour-practice-form-schizophrenia",task_name:"Stroop Colour Practice"},
        "be-stroop-colour-practice-form-schizophrenia": {url:"$H/m/neurocog/stroop-colour-practice-form.html",Table:"be-stroop-colour-practice-schizophrenia",task_name:"Stroop Colour Practice"},
        "be-stroop-text-practice-data-schizophrenia": {url:"$H/m/neurocog/stroop-text-data.html",Table:"be-stroop-text-practice-schizophrenia",form_module:"be-stroop-text-practice-form-schizophrenia",task_name:"Stroop Text Practice"},
        "be-stroop-text-practice-form-schizophrenia": {url:"$H/m/neurocog/stroop-text-practice-form.html",Table:"be-stroop-text-practice-schizophrenia",task_name:"Stroop Text Practice"},
        "be-stroop-colour-data-schizophrenia":          {url:"$H/m/neurocog/stroop-colour-data.html",Table:"be-stroop-colour-schizophrenia",form_module:"be-stroop-colour-form-schizophrenia",task_name:"Stroop Colour"},
        "be-stroop-colour-form-schizophrenia":          {url:"$H/m/neurocog/stroop-colour-form.html",Table:"be-stroop-colour-schizophrenia",task_name:"Stroop Colour"},
        "be-stroop-text-data-schizophrenia":            {url:"$H/m/neurocog/stroop-text-data.html",Table:"be-stroop-text-schizophrenia",form_module:"be-stroop-text-form-schizophrenia",task_name:"Stroop Text"},
        "be-stroop-text-form-schizophrenia":            {url:"$H/m/neurocog/stroop-text-form.html",Table:"be-stroop-text-schizophrenia",task_name:"Stroop Text"},
        "be-tower-london-data-schizophrenia":            {url:"$H/m/neurocog/tower-london-data.html",Table:"be-tower-london-schizophrenia",form_module:"be-tower-london-form-schizophrenia",task_name:"Tower of London"},
        "be-tower-london-form-schizophrenia":            {url:"$H/m/neurocog/tower-london-form.html",Table:"be-tower-london-schizophrenia"},
        "be-word-pairs-set1-practice":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-practice.html"},
        "be-word-pairs-set1-trial1":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial1.html"},
        "be-word-pairs-set1-trial2":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial2.html"},
        "be-word-pairs-set1-trial3":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial3.html"},


        "fe-visit-date-data-schizophrenia":              {url:"$H/m/library/date-data.html",Table:"fe-visit-date-schizophrenia",form_module:"fe-visit-date-form-schizophrenia",task_name:"Visit Date"},
        "fe-visit-date-form-schizophrenia":              {url:"$H/m/library/date-form.html",Table:"fe-visit-date-schizophrenia",task_name:"Visit Date"},
        "fe-anthropometry-data-schizophrenia":           {url:"$H/m/library/anthropometry-data.html",Table:"fe-anthropometry-schizophrenia",form_module:"fe-anthropometry-form-schizophrenia",task_name:"Anthropometry"},
        "fe-anthropometry-form-schizophrenia":           {url:"$H/m/library/anthropometry-form.html",Table:"fe-anthropometry-schizophrenia",task_name:"Anthropometry"},


        "finger-tapping6-after-data-schizophrenia":   {url:"$H/m/neurocog/finger-tapping6-after-data.html",Table:"finger-tapping-schizophrenia",form_module:"finger-tapping6-after-form-schizophrenia"},
        "finger-tapping6-after-form-schizophrenia":   {url:"$H/m/neurocog/finger-tapping6-after-form.html",Table:"finger-tapping-schizophrenia",Table2:"finger-tapping12-schizophrenia",task_name:"Finger Tapping - Morning"},
        "finger-tapping-alt-data-schizophrenia":      {url:"$H/m/neurocog/finger-tapping-data.html",Table:"finger-tapping-alt-schizophrenia",form_module:"finger-tapping-alt-form-schizophrenia"},
        "finger-tapping-alt-form-schizophrenia":      {url:"$H/m/neurocog/finger-tapping-alt-form.html",Table:"finger-tapping-alt-schizophrenia"},
        "finger-tapping12-before-data-schizophrenia": {url:"$H/m/neurocog/finger-tapping12-before-data.html",Table:"finger-tapping12-schizophrenia",form_module:"finger-tapping12-before-form-schizophrenia"},
        "finger-tapping12-before-form-schizophrenia": {url:"$H/m/neurocog/finger-tapping12-before-form.html",Table:"finger-tapping12-schizophrenia",task_name:"Finger Tapping - Evening"},
        "finger-tapping12-alt-data-schizophrenia":    {url:"$H/m/neurocog/finger-tapping12-data.html",Table:"finger-tapping12-alt-schizophrenia",form_module:"finger-tapping12-alt-form-schizophrenia"},
        "finger-tapping12-alt-form-schizophrenia":    {url:"$H/m/neurocog/finger-tapping12-alt-form.html",Table:"finger-tapping12-alt-schizophrenia"},
        "tower-london-data-schizophrenia":            {url:"$H/m/neurocog/tower-london-data.html",Table:"tower-london-schizophrenia",form_module:"tower-london-form-schizophrenia"},
        "tower-london-form-schizophrenia":            {url:"$H/m/neurocog/tower-london-form.html",Table:"tower-london-schizophrenia"},
        "kss-data-schizophrenia":                     {url:"$H/m/library/kss-data.html",Table:"kss-schizophrenia",form_module:"kss-form-schizophrenia"},
        "kss-form-schizophrenia":                     {url:"$H/m/library/kss-form.html",Table:"kss-schizophrenia",task_name:"Karolinska Sleepiness Scale (KSS)"},
        "pvt-data-schizophrenia":                     {url:"$H/m/library/pvt-data.html",Table:"pvt-schizophrenia",form_module:"pvt-form-schizophrenia"},
        "pvt-form-schizophrenia":                     {url:"$H/m/library/pvt-form.html",Table:"pvt-schizophrenia"},
        "pvt-pc-data-schizophrenia":                     {url:"$H/m/library/pvt-pc-data.html",Table:"pvt-pc-schizophrenia",form_module:"pvt-pc-form-schizophrenia"},
        "pvt-pc-form-schizophrenia":                     {url:"$H/m/library/pvt-pc-form.html",Table:"pvt-pc-schizophrenia"},

        "word-pairs-set1-practice":	{url:"$H/m/word-pairs/evening-wordpairs-set1-practice.html"},
        "word-pairs-set1-trial1":	    {url:"$H/m/word-pairs/evening-wordpairs-set1-trial1.html"},
        "word-pairs-set1-trial2":	    {url:"$H/m/word-pairs/evening-wordpairs-set1-trial2.html"},
        "word-pairs-set1-trial3":	    {url:"$H/m/word-pairs/evening-wordpairs-set1-trial3.html"},
        "word-pairs-set1-data":		{url:"$H/m/library/word-pairs-set1-data.html",Table:"word-pairs-set1",form_module:"word-pairs-set1-form"},
        "word-pairs-set1-form":		{url:"$H/m/library/word-pairs-set1-form.html",Table:"word-pairs-set1"},
        "finger-tapping-data":		    {url:"$H/m/neurocog/finger-tapping12-data.html",Table:"finger-tapping",form_module:"finger-tapping-form"},
        "finger-tapping-form":		    {url:"$H/m/neurocog/finger-tapping12-form.html",Table:"finger-tapping",task_name:"Finger Tapping"},
        "word-pairs-set1-morning":	{url:"$H/m/word-pairs/morning-wordpairs-set1.html"},
        "word-pairs-set1-data":		{url:"$H/m/library/word-pairs-set1-data.html",Table:"word-pairs-set1",form_module:"word-pairs-set1-form"},
        "word-pairs-set1-form":		{url:"$H/m/library/word-pairs-set1-form.html",Table:"word-pairs-set1"},
        "finger-tapping-data":		{url:"$H/m/neurocog/finger-tapping-data.html",Table:"finger-tapping",form_module:"finger-tapping-form"},
        "finger-tapping-form":		{url:"$H/m/neurocog/finger-tapping-form.html",Table:"finger-tapping",Table2:"neurovosa-3m-pre-finger-tapping",task_name:"Finger Tapping"},

    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.hosting_path=$vm.hosting_path.replace('online-questionnaire','')
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
//    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
//    }
})();
