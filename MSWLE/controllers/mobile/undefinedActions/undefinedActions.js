define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTextChange defined for txtSearchPrimaryContractor **/
    AS_TextField_gd4ac7922ab4480cb3bec8b294da0603: function AS_TextField_gd4ac7922ab4480cb3bec8b294da0603(eventobject, changedtext) {
        var self = this;
        return primaryContractorSearch.call(this);
    },
    /** onRowClick defined for segPriContractor **/
    AS_Segment_e1b82bf6e8f44e90b848db8080f326ec: function AS_Segment_e1b82bf6e8f44e90b848db8080f326ec(eventobject, sectionNumber, rowNumber) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmIncompLst");
        ntf.navigate();
    },
    /** preShow defined for frmPrimaryContractor **/
    AS_Form_j562c7230e5c44038e66007651cbebbe: function AS_Form_j562c7230e5c44038e66007651cbebbe(eventobject) {
        var self = this;
        flxHdrTitle.lblHdrTitle.text = "Primary Contractors";
        frmPrimaryContractor.txtSearchPrimaryContractor.text = "";
        frmPrimaryContractor.segPriContractor.setData([]);
        flxHdrTitle.flxSettingBtn.setVisibility(false);
    }
});