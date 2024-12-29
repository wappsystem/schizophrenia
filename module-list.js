(function(){
    var modules={
        "panel-main":    	        {url:"$H/m/panel-main.html",router:1},
        "panel-child":              {url:"$H/m/panel-child.html"},
        "panel-export-screening":   {url:"$H/m/export/panel-export-screening.html",router:1},
        "panel-export-baseline":    {url:"$H/m/export/panel-export-baseline.html",router:1},
        "panel-export-followup":    {url:"$H/m/export/panel-export-followup.html",router:1},
        "export-data": {url:"$H/m/export/export-data.html",Table:"schizophrenia-export",form_module:"export-form"},
        "export-form": {url:"$H/m/export/export-form.html",Table:"schizophrenia-export"},
        
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
        "online-questionnaire-panel":       {url:"$H/m/oq-panel.html"},

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
        
        "s-visit-date-data-schizophrenia":              {url:"$H/m/library/date-data.html",Table:"s-visit-date-schizophrenia",form_module:"s-visit-date-form-schizophrenia",task_name:"Screening - Visit Date"},
        "s-visit-date-form-schizophrenia":              {url:"$H/m/library/date-form.html",Table:"s-visit-date-schizophrenia",task_name:"Screening - Visit Date"},
        "s-anthropometry-data-schizophrenia":           {url:"$H/m/library/anthropometry-data.html",Table:"s-anthropometry-schizophrenia",form_module:"s-anthropometry-form-schizophrenia",task_name:"Screening - Anthropometry"},
        "s-anthropometry-form-schizophrenia":           {url:"$H/m/library/anthropometry-form.html",Table:"s-anthropometry-schizophrenia",task_name:"Screening - Anthropometry"},
        "s-ethnicity-data-schizophrenia":               {url:"$H/m/library/ethnicity-data.html",Table:"s-ethnicity-schizophrenia",form_module:"s-ethnicity-form-schizophrenia"},
        "s-ethnicity-form-schizophrenia":               {url:"$H/m/library/ethnicity-form.html",Table:"s-ethnicity-schizophrenia",task_name:"Screening - Ethnicity"},
        "s-lifestyle-data-schizophrenia":               {url:"$H/m/library/lifestyle-data.html",Table:"s-lifestyle-schizophrenia",form_module:"s-lifestyle-form-schizophrenia",task_name:"Screening - Lifestyle"},
        "s-lifestyle-form-schizophrenia":               {url:"$H/m/library/lifestyle-form.html",Table:"s-lifestyle-schizophrenia",task_name:"Screening - Lifestyle"},
        "s-education-data-schizophrenia":               {url:"$H/m/library/education-data.html",Table:"s-education-schizophrenia",form_module:"s-education-form-schizophrenia",task_name:"Screening - Education"},
        "s-education-form-schizophrenia":               {url:"$H/m/library/education-form.html",Table:"s-education-schizophrenia",task_name:"Screening - Education"},
        "s-medications-data-schizophrenia":              {url:"$H/m/library/medications-data.html",Table:"s-medications-schizophrenia",form_module:"s-medications-form-schizophrenia",task_name:"Screening - Concomitant Medication"},
        "s-medications-form-schizophrenia":              {url:"$H/m/library/medications-form.html",Table:"s-medications-schizophrenia",task_name:"Screening - Concomitant Medication"},
        "s-concom-file-data-schizophrenia":		        {url:"$H/m/library/upload-file-data.html",Table:"s-concom-file-schizophrenia",form_module:"s-concom-file-form-schizophrenia",task_name:"Screening - Concomitant medication file upload"},
        "s-concom-file-form-schizophrenia":		        {url:"$H/m/library/upload-file-form.html",Table:"s-concom-file-schizophrenia",task_name:"Screening - Concomitant medication file upload"},
        "s-medical-history-data-schizophrenia":         {url:"$H/m/library/medical-history-data.html",Table:"s-medical-history-schizophrenia",form_module:"s-medical-history-form-schizophrenia",task_name:"Screening - Medical History"},
        "s-medical-history-form-schizophrenia":         {url:"$H/m/library/medical-history-form.html",Table:"s-medical-history-schizophrenia",task_name:"Screening - Medical History"},
        "s-ess-data-schizophrenia":                     {url:"$H/m/library/ess-data.html",Table:"s-ess-schizophrenia",form_module:"s-ess-form-schizophrenia",task_name:"Screening - Epworth Sleepiness Scale"},
        "s-ess-form-schizophrenia":                     {url:"$H/m/library/ess-form.html",Table:"s-ess-schizophrenia",task_name:"Screening - Epworth Sleepiness Scale"},
        "s-isi-data-schizophrenia":                     {url:"$H/m/library/isi-data.html",Table:"s-isi-schizophrenia",form_module:"s-isi-form-schizophrenia",task_name:"Screening - Insomnia Severity Index"},
        "s-isi-form-schizophrenia":                     {url:"$H/m/library/isi-form.html",Table:"s-isi-schizophrenia",task_name:"Screening - Insomnia Severity Index"},
        "s-psqi-data-schizophrenia":                    {url:"$H/m/library/psqi-data.html",Table:"s-psqi-schizophrenia",form_module:"s-psqi-form-schizophrenia",task_name:"Screening - Pittsburgh Sleep Quality Index (PSQI)"},
        "s-psqi-form-schizophrenia":                    {url:"$H/m/library/psqi-form.html",Table:"s-psqi-schizophrenia",task_name:"Screening - Pittsburgh Sleep Quality Index (PSQI)"},
        "s-dass-data-schizophrenia":                    {url:"$H/m/library/dass-data.html",Table:"s-dass-schizophrenia",form_module:"s-dass-form-schizophrenia",task_name:"Screening - Depression Anxiety Stress Scale (DASS-21)"},
        "s-dass-form-schizophrenia":                    {url:"$H/m/library/dass-form.html",Table:"s-dass-schizophrenia",task_name:"Screening - Depression Anxiety Stress Scale (DASS-21)"},

        "be-visit-date-data-schizophrenia":             {url:"$H/m/library/date-data.html",Table:"be-visit-date-schizophrenia",form_module:"be-visit-date-form-schizophrenia",task_name:"Baseline evening - Visit Date"},
        "be-visit-date-form-schizophrenia":             {url:"$H/m/library/date-form.html",Table:"be-visit-date-schizophrenia",task_name:"Baseline evening - Visit Date"},
        "be-anthropometry-short-data-schizophrenia":           {url:"$H/m/library/anthropometry-short-data.html",Table:"be-anthropometry-short-schizophrenia",form_module:"be-anthropometry-short-form-schizophrenia",task_name:"Baseline - Anthropometry"},
        "be-anthropometry-short-form-schizophrenia":           {url:"$H/m/library/anthropometry-short-form.html",Table:"be-anthropometry-short-schizophrenia",task_name:"Baseline - Anthropometry"},
        "be-pvt-data-schizophrenia":                    {url:"$H/m/library/pvt-data.html",Table:"be-pvt-schizophrenia",form_module:"be-pvt-form-schizophrenia",task_name:"Baseline evening - PVT"},
        "be-pvt-form-schizophrenia":                    {url:"$H/m/library/pvt-form.html",Table:"be-pvt-schizophrenia",task_name:"Baseline evening - PVT"},
        "be-pvt-pc-data-schizophrenia":                 {url:"$H/m/library/pvt-pc-data.html",Table:"be-pvt-pc-schizophrenia",form_module:"be-pvt-pc-form-schizophrenia",task_name:"Baseline evening - PC PVT"},
        "be-pvt-pc-form-schizophrenia":                 {url:"$H/m/library/pvt-pc-form.html",Table:"be-pvt-pc-schizophrenia",task_name:"Baseline evening - PC PVT"},
        "be-stroop-colour-practice-data-schizophrenia": {url:"$H/m/neurocog/stroop-colour-data.html",Table:"be-stroop-colour-practice-schizophrenia",form_module:"be-stroop-colour-practice-form-schizophrenia",task_name:"Baseline evening - Stroop Colour Practice"},
        "be-stroop-colour-practice-form-schizophrenia": {url:"$H/m/neurocog/stroop-colour-practice-form.html",Table:"be-stroop-colour-practice-schizophrenia",task_name:"Baseline evening - Stroop Colour Practice"},
        "be-stroop-text-practice-data-schizophrenia": {url:"$H/m/neurocog/stroop-text-data.html",Table:"be-stroop-text-practice-schizophrenia",form_module:"be-stroop-text-practice-form-schizophrenia",task_name:"Baseline evening - Stroop Text Practice"},
        "be-stroop-text-practice-form-schizophrenia": {url:"$H/m/neurocog/stroop-text-practice-form.html",Table:"be-stroop-text-practice-schizophrenia",task_name:"Baseline evening - Stroop Text Practice"},
        "be-stroop-colour-data-schizophrenia":      {url:"$H/m/neurocog/stroop-colour-data.html",Table:"be-stroop-colour-schizophrenia",form_module:"be-stroop-colour-form-schizophrenia",task_name:"Baseline evening - Stroop Colour"},
        "be-stroop-colour-form-schizophrenia":      {url:"$H/m/neurocog/stroop-colour-form.html",Table:"be-stroop-colour-schizophrenia",task_name:"Baseline evening - Stroop Colour"},
        "be-stroop-text-data-schizophrenia":        {url:"$H/m/neurocog/stroop-text-data.html",Table:"be-stroop-text-schizophrenia",form_module:"be-stroop-text-form-schizophrenia",task_name:"Baseline evening - Stroop Text"},
        "be-stroop-text-form-schizophrenia":        {url:"$H/m/neurocog/stroop-text-form.html",Table:"be-stroop-text-schizophrenia",task_name:"Baseline evening - Stroop Text"},
        "be-tower-london-data-schizophrenia":       {url:"$H/m/neurocog/tower-london-data.html",Table:"be-tower-london-schizophrenia",form_module:"be-tower-london-form-schizophrenia",task_name:"Baseline evening - Tower of London"},
        "be-tower-london-form-schizophrenia":       {url:"$H/m/neurocog/tower-london-form.html",Table:"be-tower-london-schizophrenia",task_name:"Baseline evening - Tower of London"},
        "be-word-pairs-set1-practice":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-practice.html"},
        "be-word-pairs-set1-trial1":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial1.html"},
        "be-word-pairs-set1-trial2":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial2.html"},
        "be-word-pairs-set1-trial3":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial3.html"},
        "be-word-pairs-set2-practice":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-practice.html"},
        "be-word-pairs-set2-trial1":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial1.html"},
        "be-word-pairs-set2-trial2":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial2.html"},
        "be-word-pairs-set2-trial3":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial3.html"},
        "be-finger-tapping12-before-data-schizophrenia": {url:"$H/m/neurocog/finger-tapping12-before-data.html",Table:"be-finger-tapping12-schizophrenia",form_module:"be-finger-tapping12-before-form-schizophrenia",task_name:"Baseline evening - Finger Tapping 4-1-3-2-4"},
        "be-finger-tapping12-before-form-schizophrenia": {url:"$H/m/neurocog/finger-tapping12-before-form.html",Table:"be-finger-tapping12-schizophrenia",task_name:"Baseline evening - Finger Tapping 4-1-3-2-4"},
        "be-finger-tapping12-alt-data-schizophrenia":    {url:"$H/m/neurocog/finger-tapping12-before-data.html",Table:"be-finger-tapping12-alt-schizophrenia",form_module:"be-finger-tapping12-alt-form-schizophrenia",task_name:"Baseline evening - Finger Tapping 1-4-2-3-1"},
        "be-finger-tapping12-alt-form-schizophrenia":    {url:"$H/m/neurocog/finger-tapping12-alt-form.html",Table:"be-finger-tapping12-alt-schizophrenia",task_name:"Baseline evening - Finger Tapping 1-4-2-3-1"},
        "be-kss-data-schizophrenia":                    {url:"$H/m/library/kss-data.html",Table:"be-kss-schizophrenia",form_module:"be-kss-form-schizophrenia",task_name:"Baseline evening - KSS"},
        "be-kss-form-schizophrenia":                    {url:"$H/m/library/kss-form.html",Table:"be-kss-schizophrenia",task_name:"Baseline evening - KSS"},

        "bm-word-pairs-recall-set1-schizophrenia":	            {url:"$H/m/word-pairs/morning-wordpairs-set1.html"},
        "bm-word-pairs-recall-set2-schizophrenia":	            {url:"$H/m/word-pairs/morning-wordpairs-set2.html"},
        "bm-word-pairs-set1-data-schizophrenia":		{url:"$H/m/library/word-pairs-data.html",Table:"bm-word-pairs-set1-schizophrenia",form_module:"bm-word-pairs-set1-form-schizophrenia",task_name:"Baseline - Word Pair Set 1"},
        "bm-word-pairs-set1-form-schizophrenia":		{url:"$H/m/library/word-pairs-form.html",Table:"bm-word-pairs-set1-schizophrenia",task_name:"Baseline - Word Pair Set 1"},
        "bm-word-pairs-set2-data-schizophrenia":		{url:"$H/m/library/word-pairs-data.html",Table:"bm-word-pairs-set2-schizophrenia",form_module:"bm-word-pairs-set2-form-schizophrenia",task_name:"Baseline - Word Pair Set 2"},
        "bm-word-pairs-set2-form-schizophrenia":		{url:"$H/m/library/word-pairs-form.html",Table:"bm-word-pairs-set2-schizophrenia",task_name:"Baseline - Word Pair Set 2"},
        "bm-finger-tapping6-after-data-schizophrenia": {url:"$H/m/neurocog/finger-tapping6-after-data.html",Table:"bm-finger-tapping6-schizophrenia",form_module:"bm-finger-tapping6-after-form-schizophrenia",task_name:"Baseline morning - Finger Tapping 4-1-3-2-4"},
        "bm-finger-tapping6-after-form-schizophrenia": {url:"$H/m/neurocog/finger-tapping6-after-form.html",Table:"bm-finger-tapping6-schizophrenia",Table2:"be-finger-tapping12-schizophrenia",task_name:"Baseline morning - Finger Tapping 4-1-3-2-4"},
        "bm-finger-tapping6-alt-data-schizophrenia":    {url:"$H/m/neurocog/finger-tapping6-after-data.html",Table:"bm-finger-tapping6-alt-schizophrenia",form_module:"bm-finger-tapping6-alt-form-schizophrenia",task_name:"Baseline morning - Finger Tapping 1-4-2-3-1"},
        "bm-finger-tapping6-alt-form-schizophrenia":    {url:"$H/m/neurocog/finger-tapping6-alt-form.html",Table:"bm-finger-tapping6-alt-schizophrenia",Table2:"be-finger-tapping12-alt-schizophrenia",task_name:"Baseline morning - Finger Tapping 1-4-2-3-1"},
        "bm-kss-data-schizophrenia":                    {url:"$H/m/library/kss-data.html",Table:"bm-kss-schizophrenia",form_module:"bm-kss-form-schizophrenia",task_name:"Baseline morning - KSS"},
        "bm-kss-form-schizophrenia":                    {url:"$H/m/library/kss-form.html",Table:"bm-kss-schizophrenia",task_name:"Baseline morning - KSS"},

        "bg-psggrr-data-schizophrenia":		                {url:"$H/m/library/psggrr-data.html",Table:"bg-psggrr-schizophrenia",form_module:"bg-psggrr-form-schizophrenia",task_name:"Baseline General - Grael Research PSG Report"},
        "bg-psggrr-form-schizophrenia":		                {url:"$H/m/library/psggrr-form.html",Table:"bg-psggrr-schizophrenia",task_name:"Baseline General - Grael Research PSG Report"},
        "bg-psgedf-data-schizophrenia":		                {url:"$H/m/library/upload-file-data.html",Table:"bg-psgedf-schizophrenia",form_module:"bg-psgedf-form-schizophrenia",task_name:"Baseline General - PSG EDF"},
        "bg-psgedf-form-schizophrenia":		                {url:"$H/m/library/upload-file-form.html",Table:"bg-psgedf-schizophrenia",task_name:"Baseline General - PSG EDF"},
        "bg-sleep-scoring-data-schizophrenia":		                {url:"$H/m/library/upload-file-data.html",Table:"bg-sleep-scoring-schizophrenia",form_module:"bg-sleep-scoring-form-schizophrenia",task_name:"Baseline General - Sleep Scoring"},
        "bg-sleep-scoring-form-schizophrenia":		                {url:"$H/m/library/upload-file-form.html",Table:"bg-sleep-scoring-schizophrenia",task_name:"Baseline General - Sleep Scoring"},
        "bg-source-doc-data-schizophrenia":		                {url:"$H/m/library/upload-file-data.html",Table:"bg-source-doc-schizophrenia",form_module:"bg-source-doc-form-schizophrenia",task_name:"Baseline General - Source Documents"},
        "bg-source-doc-form-schizophrenia":		                {url:"$H/m/library/upload-file-form.html",Table:"bg-source-doc-schizophrenia",task_name:"Baseline General - Source Documents"},
        "bg-sleep-diary-data-schizophrenia":		                {url:"$H/m/library/upload-file-data.html",Table:"bg-sleep-diary-schizophrenia",form_module:"bg-sleep-diary-form-schizophrenia",task_name:"Baseline General - Sleep Diary"},
        "bg-sleep-diary-form-schizophrenia":		                {url:"$H/m/library/upload-file-form.html",Table:"bg-sleep-diary-schizophrenia",task_name:"Baseline General - Sleep Diary"},
        "bg-actigraphy-data-schizophrenia":		                {url:"$H/m/library/actiwatch-data.html",Table:"bg-actigraphy-schizophrenia",form_module:"bg-actigraphy-form-schizophrenia",task_name:"Baseline General - Actigraphy"},
        "bg-actigraphy-form-schizophrenia":		                {url:"$H/m/library/actiwatch-form.html",Table:"bg-actigraphy-schizophrenia",task_name:"Baseline General - Actigraphy"},
        "bg-geoscan-data-schizophrenia":		                {url:"$H/m/library/upload-file-data.html",Table:"bg-geoscan-schizophrenia",form_module:"bg-geoscan-form-schizophrenia",task_name:"Baseline General - Geoscan"},
        "bg-geoscan-form-schizophrenia":		                {url:"$H/m/library/upload-file-form.html",Table:"bg-geoscan-schizophrenia",task_name:"Baseline General - Geoscan"},
        "bg-cpap-upload-data-schizophrenia":		                {url:"$H/m/library/upload-file-data.html",Table:"bg-cpap-upload-schizophrenia",form_module:"bg-cpap-upload-form-schizophrenia",task_name:"Baseline General - CPAP upload"},
        "bg-cpap-upload-form-schizophrenia":		                {url:"$H/m/library/upload-file-form.html",Table:"bg-cpap-upload-schizophrenia",task_name:"Baseline General - CPAP upload"},

        "fe-visit-date-data-schizophrenia":             {url:"$H/m/library/date-data.html",Table:"fe-visit-date-schizophrenia",form_module:"fe-visit-date-form-schizophrenia",task_name:"Follow Up evening - Visit Date"},
        "fe-visit-date-form-schizophrenia":             {url:"$H/m/library/date-form.html",Table:"fe-visit-date-schizophrenia",task_name:"Follow Up evening - Visit Date"},
        "fe-anthropometry-short-data-schizophrenia":           {url:"$H/m/library/anthropometry-short-data.html",Table:"fe-anthropometry-short-schizophrenia",form_module:"fe-anthropometry-short-form-schizophrenia",task_name:"Follow Up evening - Anthropometry"},
        "fe-anthropometry-short-form-schizophrenia":           {url:"$H/m/library/anthropometry-short-form.html",Table:"fe-anthropometry-short-schizophrenia",task_name:"Follow Up evening - Anthropometry"},
        "fe-pvt-data-schizophrenia":                    {url:"$H/m/library/pvt-data.html",Table:"fe-pvt-schizophrenia",form_module:"fe-pvt-form-schizophrenia",task_name:"Follow Up evening - PVT"},
        "fe-pvt-form-schizophrenia":                    {url:"$H/m/library/pvt-form.html",Table:"fe-pvt-schizophrenia",task_name:"Follow Up evening - PVT"},
        "fe-pvt-pc-data-schizophrenia":                 {url:"$H/m/library/pvt-pc-data.html",Table:"fe-pvt-pc-schizophrenia",form_module:"fe-pvt-pc-form-schizophrenia",task_name:"Follow Up evening - PC PVT"},
        "fe-pvt-pc-form-schizophrenia":                 {url:"$H/m/library/pvt-pc-form.html",Table:"fe-pvt-pc-schizophrenia",task_name:"Follow Up evening - PC PVT"},
        "fe-stroop-colour-practice-data-schizophrenia": {url:"$H/m/neurocog/stroop-colour-data.html",Table:"fe-stroop-colour-practice-schizophrenia",form_module:"fe-stroop-colour-practice-form-schizophrenia",task_name:"Follow Up evening - Stroop Colour Practice"},
        "fe-stroop-colour-practice-form-schizophrenia": {url:"$H/m/neurocog/stroop-colour-practice-form.html",Table:"fe-stroop-colour-practice-schizophrenia",task_name:"Follow Up evening - Stroop Colour Practice"},
        "fe-stroop-text-practice-data-schizophrenia": {url:"$H/m/neurocog/stroop-text-data.html",Table:"fe-stroop-text-practice-schizophrenia",form_module:"fe-stroop-text-practice-form-schizophrenia",task_name:"Follow Up evening - Stroop Text Practice"},
        "fe-stroop-text-practice-form-schizophrenia": {url:"$H/m/neurocog/stroop-text-practice-form.html",Table:"fe-stroop-text-practice-schizophrenia",task_name:"Follow Up evening - Stroop Text Practice"},
        "fe-stroop-colour-data-schizophrenia":      {url:"$H/m/neurocog/stroop-colour-data.html",Table:"fe-stroop-colour-schizophrenia",form_module:"fe-stroop-colour-form-schizophrenia",task_name:"Follow Up evening - Stroop Colour"},
        "fe-stroop-colour-form-schizophrenia":      {url:"$H/m/neurocog/stroop-colour-form.html",Table:"fe-stroop-colour-schizophrenia",task_name:"Follow Up evening - Stroop Colour"},
        "fe-stroop-text-data-schizophrenia":        {url:"$H/m/neurocog/stroop-text-data.html",Table:"fe-stroop-text-schizophrenia",form_module:"fe-stroop-text-form-schizophrenia",task_name:"Follow Up evening - Stroop Text"},
        "fe-stroop-text-form-schizophrenia":        {url:"$H/m/neurocog/stroop-text-form.html",Table:"fe-stroop-text-schizophrenia",task_name:"Follow Up evening - Stroop Text"},
        "fe-tower-london-data-schizophrenia":       {url:"$H/m/neurocog/tower-london-data.html",Table:"fe-tower-london-schizophrenia",form_module:"fe-tower-london-form-schizophrenia",task_name:"Follow Up evening - Tower of London"},
        "fe-tower-london-form-schizophrenia":       {url:"$H/m/neurocog/tower-london-form.html",Table:"fe-tower-london-schizophrenia",task_name:"Follow Up evening - Tower of London"},
        "fe-ess-data-schizophrenia":       {url:"$H/m/library/ess-data.html",Table:"fe-ess-schizophrenia",form_module:"fe-ess-form-schizophrenia",task_name:"Follow Up evening - Epworth Sleepiness Scale (ESS)"},
        "fe-ess-form-schizophrenia":       {url:"$H/m/library/ess-form.html",Table:"fe-ess-schizophrenia",task_name:"Follow Up evening - Epworth Sleepiness Scale (ESS)"},
        "fe-isi-data-schizophrenia":       {url:"$H/m/library/isi-data.html",Table:"fe-isi-schizophrenia",form_module:"fe-isi-form-schizophrenia",task_name:"Follow Up evening - Insomnia Severity Scale (ISI)"},
        "fe-isi-form-schizophrenia":       {url:"$H/m/library/isi-form.html",Table:"fe-isi-schizophrenia",task_name:"Follow Up evening - Insomnia Severity Scale (ISI)"},
        "fe-psqi-data-schizophrenia":       {url:"$H/m/library/psqi-data.html",Table:"fe-psqi-schizophrenia",form_module:"fe-psqi-form-schizophrenia",task_name:"Follow Up evening - Pittsburgh Sleep Quality Index (PSQI)"},
        "fe-psqi-form-schizophrenia":       {url:"$H/m/library/psqi-form.html",Table:"fe-psqi-schizophrenia",task_name:"Follow Up evening - Pittsburgh Sleep Quality Index (PSQI)"},
        "fe-dass-data-schizophrenia":       {url:"$H/m/library/dass-data.html",Table:"fe-dass-schizophrenia",form_module:"fe-dass-form-schizophrenia",task_name:"Follow Up evening - Depression Anxiety Stress Scale (DASS-21)"},
        "fe-dass-form-schizophrenia":       {url:"$H/m/library/dass-form.html",Table:"fe-dass-schizophrenia",task_name:"Follow Up evening - Depression Anxiety Stress Scale (DASS-21)"},
        "fe-word-pairs-set1-practice":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-practice.html"},
        "fe-word-pairs-set1-trial1":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial1.html"},
        "fe-word-pairs-set1-trial2":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial2.html"},
        "fe-word-pairs-set1-trial3":	            {url:"$H/m/word-pairs/evening-wordpairs-set1-trial3.html"},
        "fe-word-pairs-set2-practice":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-practice.html"},
        "fe-word-pairs-set2-trial1":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial1.html"},
        "fe-word-pairs-set2-trial2":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial2.html"},
        "fe-word-pairs-set2-trial3":	            {url:"$H/m/word-pairs/evening-wordpairs-set2-trial3.html"},
        "fe-finger-tapping12-before-data-schizophrenia": {url:"$H/m/neurocog/finger-tapping12-before-data.html",Table:"fe-finger-tapping12-schizophrenia",form_module:"fe-finger-tapping12-before-form-schizophrenia",task_name:"Follow Up evening - Finger Tapping 4-1-3-2-4"},
        "fe-finger-tapping12-before-form-schizophrenia": {url:"$H/m/neurocog/finger-tapping12-before-form.html",Table:"fe-finger-tapping12-schizophrenia",task_name:"Follow Up evening - Finger Tapping 4-1-3-2-4"},
        "fe-finger-tapping12-alt-data-schizophrenia":    {url:"$H/m/neurocog/finger-tapping12-before-data.html",Table:"fe-finger-tapping12-alt-schizophrenia",form_module:"fe-finger-tapping12-alt-form-schizophrenia",task_name:"Follow Up evening - Finger Tapping 1-4-2-3-1"},
        "fe-finger-tapping12-alt-form-schizophrenia":    {url:"$H/m/neurocog/finger-tapping12-alt-form.html",Table:"fe-finger-tapping12-alt-schizophrenia",task_name:"Follow Up evening - Finger Tapping 1-4-2-3-1"},
        "fe-kss-data-schizophrenia":                    {url:"$H/m/library/kss-data.html",Table:"fe-kss-schizophrenia",form_module:"fe-kss-form-schizophrenia",task_name:"Follow Up evening - KSS"},
        "fe-kss-form-schizophrenia":                    {url:"$H/m/library/kss-form.html",Table:"fe-kss-schizophrenia",task_name:"Follow Up evening - KSS"},

        "fm-word-pairs-recall-set1-schizophrenia":	            {url:"$H/m/word-pairs/morning-wordpairs-set1.html"},
        "fm-word-pairs-recall-set2-schizophrenia":	            {url:"$H/m/word-pairs/morning-wordpairs-set2.html"},
        "fm-word-pairs-set1-data-schizophrenia":		{url:"$H/m/library/word-pairs-data.html",Table:"fm-word-pairs-set1-schizophrenia",form_module:"fm-word-pairs-set1-form-schizophrenia",task_name:"Follow Up - Word Pair Set 1"},
        "fm-word-pairs-set1-form-schizophrenia":		{url:"$H/m/library/word-pairs-form.html",Table:"fm-word-pairs-set1-schizophrenia",task_name:"Follow Up - Word Pair Set 1"},
        "fm-word-pairs-set2-data-schizophrenia":		{url:"$H/m/library/word-pairs-data.html",Table:"fm-word-pairs-set2-schizophrenia",form_module:"fm-word-pairs-set2-form-schizophrenia",task_name:"Follow Up - Word Pair Set 2"},
        "fm-word-pairs-set2-form-schizophrenia":		{url:"$H/m/library/word-pairs-form.html",Table:"fm-word-pairs-set2-schizophrenia",task_name:"Follow Up - Word Pair Set 2"},
        "fm-finger-tapping6-after-data-schizophrenia": {url:"$H/m/neurocog/finger-tapping6-after-data.html",Table:"fm-finger-tapping6-schizophrenia",form_module:"fm-finger-tapping6-after-form-schizophrenia",task_name:"Follow Up morning - Finger Tapping 4-1-3-2-4"},
        "fm-finger-tapping6-after-form-schizophrenia": {url:"$H/m/neurocog/finger-tapping6-after-form.html",Table:"fm-finger-tapping6-schizophrenia",task_name:"Follow Up morning - Finger Tapping 4-1-3-2-4"},
        "fm-finger-tapping6-alt-data-schizophrenia":    {url:"$H/m/neurocog/finger-tapping6-after-data.html",Table:"fm-finger-tapping6-alt-schizophrenia",form_module:"fm-finger-tapping6-alt-form-schizophrenia",task_name:"Follow Up morning - Finger Tapping 1-4-2-3-1"},
        "fm-finger-tapping6-alt-form-schizophrenia":    {url:"$H/m/neurocog/finger-tapping6-alt-form.html",Table:"fm-finger-tapping6-alt-schizophrenia",task_name:"Follow Up morning - Finger Tapping 1-4-2-3-1"},
        "fm-kss-data-schizophrenia":                    {url:"$H/m/library/kss-data.html",Table:"fm-kss-schizophrenia",form_module:"fm-kss-form-schizophrenia",task_name:"Follow Up morning - KSS"},
        "fm-kss-form-schizophrenia":                    {url:"$H/m/library/kss-form.html",Table:"fm-kss-schizophrenia",task_name:"Follow Up morning - KSS"},

        "fg-psggrr-data-schizophrenia":		                {url:"$H/m/library/psggrr-data.html",Table:"fg-psggrr-schizophrenia",form_module:"fg-psggrr-form-schizophrenia",task_name:"Follow Up General - Grael Research PSG Report"},
        "fg-psggrr-form-schizophrenia":		                {url:"$H/m/library/psggrr-form.html",Table:"fg-psggrr-schizophrenia",task_name:"Follow Up General - Grael Research PSG Report"},
        "fg-psgedf-data-schizophrenia":		                {url:"$H/m/library/upload-file-data.html",Table:"fg-psgedf-schizophrenia",form_module:"fg-psgedf-form-schizophrenia",task_name:"Follow Up General - PSG EDF"},
        "fg-psgedf-form-schizophrenia":		                {url:"$H/m/library/upload-file-form.html",Table:"fg-psgedf-schizophrenia",task_name:"Follow Up General - PSG EDF"},
        "fg-sleep-scoring-data-schizophrenia":		                {url:"$H/m/library/upload-file-data.html",Table:"fg-sleep-scoring-schizophrenia",form_module:"fg-sleep-scoring-form-schizophrenia",task_name:"Follow Up General - Sleep Scoring"},
        "fg-sleep-scoring-form-schizophrenia":		                {url:"$H/m/library/upload-file-form.html",Table:"fg-sleep-scoring-schizophrenia",task_name:"Follow Up General - Sleep Scoring"},
        "fg-source-doc-data-schizophrenia":		                {url:"$H/m/library/upload-file-data.html",Table:"fg-source-doc-schizophrenia",form_module:"fg-source-doc-form-schizophrenia",task_name:"Follow Up General - Source Documents"},
        "fg-source-doc-form-schizophrenia":		                {url:"$H/m/library/upload-file-form.html",Table:"fg-source-doc-schizophrenia",task_name:"Follow Up General - Source Documents"},
        "fg-sleep-diary-data-schizophrenia":		                {url:"$H/m/library/upload-file-data.html",Table:"fg-sleep-diary-schizophrenia",form_module:"fg-sleep-diary-form-schizophrenia",task_name:"Follow Up General - Sleep Diary"},
        "fg-sleep-diary-form-schizophrenia":		                {url:"$H/m/library/upload-file-form.html",Table:"fg-sleep-diary-schizophrenia",task_name:"Follow Up General - Sleep Diary"},
        "fg-actigraphy-data-schizophrenia":		                {url:"$H/m/library/actiwatch-data.html",Table:"fg-actigraphy-schizophrenia",form_module:"fg-actigraphy-form-schizophrenia",task_name:"Follow Up General - Actigraphy"},
        "fg-actigraphy-form-schizophrenia":		                {url:"$H/m/library/actiwatch-form.html",Table:"fg-actigraphy-schizophrenia",task_name:"Follow Up General - Actigraphy"},
        "fg-geoscan-data-schizophrenia":		                {url:"$H/m/library/upload-file-data.html",Table:"fg-geoscan-schizophrenia",form_module:"fg-geoscan-form-schizophrenia",task_name:"Follow Up General - Geoscan"},
        "fg-geoscan-form-schizophrenia":		                {url:"$H/m/library/upload-file-form.html",Table:"fg-geoscan-schizophrenia",task_name:"Follow Up General - Geoscan"},
        "fg-cpap-upload-data-schizophrenia":		                {url:"$H/m/library/upload-file-data.html",Table:"fg-cpap-upload-schizophrenia",form_module:"fg-cpap-upload-form-schizophrenia",task_name:"Follow Up General - CPAP upload"},
        "fg-cpap-upload-form-schizophrenia":		                {url:"$H/m/library/upload-file-form.html",Table:"fg-cpap-upload-schizophrenia",task_name:"Follow Up General - CPAP upload"},
        "cpap-review-2-data-schizophrenia":		                {url:"$H/m/library/cpap-review-data.html",Table:"cpap-review-2-schizophrenia",form_module:"cpap-review-2-form-schizophrenia",task_name:"CPAP Review 2 Weeks"},
        "cpap-review-2-form-schizophrenia":		                {url:"$H/m/library/cpap-review-form.html",Table:"cpap-review-2-schizophrenia",task_name:"CPAP Review 2 Weeks"},
        "cpap-review-6-data-schizophrenia":		                {url:"$H/m/library/cpap-review-data.html",Table:"cpap-review-6-schizophrenia",form_module:"cpap-review-6-form-schizophrenia",task_name:"CPAP Review 6 Weeks"},
        "cpap-review-6-form-schizophrenia":		                {url:"$H/m/library/cpap-review-form.html",Table:"cpap-review-6-schizophrenia",task_name:"CPAP Review 6 Weeks"},
        "cpap-review-12-data-schizophrenia":		                {url:"$H/m/library/cpap-review-data.html",Table:"cpap-review-12-schizophrenia",form_module:"cpap-review-12-form-schizophrenia",task_name:"CPAP Review 12 Weeks"},
        "cpap-review-12-form-schizophrenia":		                {url:"$H/m/library/cpap-review-form.html",Table:"cpap-review-12-schizophrenia",task_name:"CPAP Review 12 Weeks"},
        "cpap-review-24-data-schizophrenia":		                {url:"$H/m/library/cpap-review-data.html",Table:"cpap-review-24-schizophrenia",form_module:"cpap-review-24-form-schizophrenia",task_name:"CPAP Review 24 Weeks"},
        "cpap-review-24-form-schizophrenia":		                {url:"$H/m/library/cpap-review-form.html",Table:"cpap-review-24-schizophrenia",task_name:"CPAP Review 24 Weeks"},

    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.hosting_path=$vm.hosting_path.replace('online-questionnaire','')
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }
})();
